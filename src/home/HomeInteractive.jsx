import { lazy, Suspense, useEffect, useState } from 'react';
import TextLoop from './TextLoop.jsx';

const Lanyard = lazy(() => import('./lanyard/Lanyard.jsx'));

export default function HomeInteractive() {
  const [homeCardEvent, setHomeCardEvent] = useState(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(() => !document.hidden);
  const [threeReady, setThreeReady] = useState(false);

  useEffect(() => {
    let active = true;

    fetch('/assets/data/upcomingevent.json')
      .then(response => {
        if (!response.ok) throw new Error(`Unable to load events (${response.status})`);
        return response.json();
      })
      .then(data => {
        if (!active) return;
        const upcoming = Array.isArray(data.upcoming) ? data.upcoming : [];
        setHomeCardEvent(upcoming.find(event => event.showOnHomeCard) ?? upcoming[0] ?? null);
      })
      .catch(error => console.error('Unable to load the home card event:', error));

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector('.immersive-hero');
    if (!hero || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setDocumentVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const revealThree = () => setThreeReady(true);
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(revealThree, { timeout: 1000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timerId = window.setTimeout(revealThree, 200);
    return () => window.clearTimeout(timerId);
  }, []);

  const renderLanyard = threeReady && heroVisible && documentVisible;

  return (
    <>
      <div className="immersive-content">
        <h1 id="hero-title" className="immersive-wordmark">
          <span>TEMPLE</span><span>IEEE</span>
        </h1>
        <TextLoop
          text="Workshop Innovation Mentorship"
          shape="wave"
          speed={50}
          direction="forward"
          separator="✦"
          curviness={40}
          fontSize={32}
          fontWeight={700}
          letterSpacing={3}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="#17394b"
          ribbonWidth={60}
          pauseOnHover={false}
        />
      </div>
      <aside className="hero-lanyard" aria-label="Click the Temple IEEE badge to flip it, or drag it down to continue">
        {renderLanyard && (
          <Suspense fallback={null}>
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              frontImage="/favicon.png"
              backImage={homeCardEvent?.image ?? null}
              frontCaption="CLICK OR PULL DOWN"
              frontImageFit="contain"
              backImageFit="contain"
              lanyardWidth={0.5}
              nextPageTarget="#about"
            />
          </Suspense>
        )}
      </aside>
    </>
  );
}
