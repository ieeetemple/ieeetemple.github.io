import { useRef, useState } from 'react';

const PARTICLES = 6;

export default function SlingButton({
  target = '#discover',
  direction = 'down',
  ariaLabel = 'Explore Temple IEEE',
  className = ''
}) {
  const rootRef = useRef(null);
  const padRef = useRef(null);
  const leftBandRef = useRef(null);
  const rightBandRef = useRef(null);
  const particleRefs = useRef([]);
  const dragRef = useRef(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const movedRef = useRef(false);
  const skipClickRef = useRef(false);
  const [held, setHeld] = useState(false);
  const [armed, setArmed] = useState(false);

  const maxPull = 74;
  const triggerDistance = 42;

  const paint = (x, y) => {
    currentRef.current = { x, y };
    if (padRef.current) padRef.current.style.transform = `translate(${x}px, ${y}px)`;
    for (const band of [leftBandRef.current, rightBandRef.current]) {
      band?.setAttribute('x2', String(90 + x));
      band?.setAttribute('y2', String(90 + y));
    }
    setArmed(Math.hypot(x, y) >= triggerDistance);
  };

  const explore = () => {
    document.querySelector(target)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  const launchParticles = (x, y) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const angle = Math.atan2(y || 1, x || 0);
    particleRefs.current.forEach((particle, index) => {
      if (!particle) return;
      const spread = (index - (PARTICLES - 1) / 2) * 0.18;
      const distance = 42 + index * 8;
      particle.animate(
        [
          { transform: 'translate(0, 0) scale(1)', opacity: 0.9 },
          {
            transform: `translate(${Math.cos(angle + spread) * distance}px, ${Math.sin(angle + spread) * distance}px) scale(0.25)`,
            opacity: 0
          }
        ],
        { duration: 360, delay: index * 18, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      );
    });
  };

  const settle = fire => {
    const releasePoint = currentRef.current;
    setHeld(false);
    setArmed(false);
    if (padRef.current) {
      padRef.current.style.transition = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'none'
        : 'transform 460ms cubic-bezier(0.16, 1, 0.3, 1)';
    }
    paint(0, 0);
    window.setTimeout(() => {
      if (padRef.current) padRef.current.style.transition = '';
    }, 480);
    if (fire) {
      launchParticles(releasePoint.x, releasePoint.y);
      explore();
    }
  };

  const release = (event, cancelled) => {
    const drag = dragRef.current;
    if (!drag || event.pointerId !== drag.id) return;
    const fire = !cancelled && Math.hypot(currentRef.current.x, currentRef.current.y) >= triggerDistance;
    dragRef.current = null;
    settle(fire);
  };

  return (
    <div ref={rootRef} className={`sling-control${className ? ` ${className}` : ''}${held ? ' is-held' : ''}${armed ? ' is-armed' : ''}`}>
      <svg className="sling-bands" viewBox="0 0 180 180" aria-hidden="true">
        <line ref={leftBandRef} className="sling-band sling-band-left" x1="74" y1="90" x2="90" y2="90" />
        <line ref={rightBandRef} className="sling-band sling-band-right" x1="106" y1="90" x2="90" y2="90" />
        <circle className="sling-well" cx="90" cy="90" r="29" />
      </svg>
      <button
        ref={padRef}
        className="sling-pad"
        type="button"
        aria-label={ariaLabel}
        onPointerDown={event => {
          if (event.button !== 0) return;
          dragRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
          movedRef.current = false;
          event.currentTarget.setPointerCapture(event.pointerId);
          event.currentTarget.style.transition = 'none';
          setHeld(true);
        }}
        onPointerMove={event => {
          const drag = dragRef.current;
          if (!drag || event.pointerId !== drag.id) return;
          const dx = event.clientX - drag.x;
          const dy = event.clientY - drag.y;
          if (Math.hypot(dx, dy) > 5) movedRef.current = true;
          const rubberband = value => (value * maxPull) / (maxPull + Math.abs(value));
          paint(rubberband(dx), rubberband(dy));
        }}
        onPointerUp={event => {
          skipClickRef.current = movedRef.current;
          release(event, false);
        }}
        onPointerCancel={event => release(event, true)}
        onLostPointerCapture={event => {
          if (dragRef.current) release(event, true);
        }}
        onClick={() => {
          if (skipClickRef.current) {
            skipClickRef.current = false;
            return;
          }
          explore();
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d={direction === 'up' ? 'M12 20V6m0 0 5 5m-5-5-5 5' : 'M12 4v14m0 0 5-5m-5 5-5-5'}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {Array.from({ length: PARTICLES }, (_, index) => (
        <span
          key={index}
          ref={element => {
            particleRefs.current[index] = element;
          }}
          className={`sling-particle particle-${index + 1}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
