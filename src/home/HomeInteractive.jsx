import { useEffect, useState } from 'react';
import TextLoop from './TextLoop.jsx';
import Lanyard from './lanyard/Lanyard.jsx';

export default function HomeInteractive() {
  const [homeCardEvent, setHomeCardEvent] = useState(null);

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
      </aside>
    </>
  );
}
