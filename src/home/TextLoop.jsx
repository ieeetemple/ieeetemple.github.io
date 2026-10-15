import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const VIEW_W = 1200;
const VIEW_H = 240;
const CY = VIEW_H / 2;
const EDGE_PAD = 6;

function buildPath(curviness, ribbonWidth) {
  const room = Math.max(20, CY - Math.max(0, ribbonWidth) / 2 - EDGE_PAD);
  const amplitude = Math.min(Math.max(0, curviness) * 2.2, room * 2);
  return `M -320 ${CY} Q -160 ${CY - amplitude} 0 ${CY} T 320 ${CY} T 640 ${CY} T 960 ${CY} T 1280 ${CY} T ${VIEW_W + 320} ${CY}`;
}

export default function TextLoop({
  text = 'WORKSHOPS ✦ MENTORSHIP ✦ INNOVATION',
  shape = 'wave',
  path: customPath,
  speed = 90,
  direction = 'forward',
  separator = '✦',
  curviness = 90,
  fontSize = 44,
  fontWeight = 700,
  letterSpacing = 2,
  uppercase = true,
  color = '#17394b',
  ribbon = true,
  ribbonColor = '#f7fafc',
  ribbonWidth = 84,
  pauseOnHover = true,
  className = '',
  style = {}
}) {
  const rootRef = useRef(null);
  const pathRef = useRef(null);
  const measureRef = useRef(null);
  const headRef = useRef(null);
  const tailRef = useRef(null);
  const [metrics, setMetrics] = useState({ length: 0, reps: 1 });

  const pathId = 'temple-loop-path';
  const path = useMemo(
    () => customPath || buildPath(curviness, ribbonWidth),
    [customPath, shape, curviness, ribbonWidth]
  );
  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text);
    const gap = separator ? `\u00a0${separator}\u00a0` : '\u00a0\u00a0\u00a0';
    return `${base}${gap}`;
  }, [text, separator, uppercase]);
  const textStyle = useMemo(
    () => ({ fontSize: `${fontSize}px`, fontWeight, letterSpacing: `${letterSpacing}px` }),
    [fontSize, fontWeight, letterSpacing]
  );

  useLayoutEffect(() => {
    let cancelled = false;

    const measure = () => {
      if (cancelled || !pathRef.current || !measureRef.current) return;
      const length = pathRef.current.getTotalLength();
      const unitWidth = measureRef.current.getComputedTextLength();
      if (!length) return;
      const reps = unitWidth > 0 ? Math.max(1, Math.round(length / unitWidth)) : 1;
      setMetrics(previous =>
        previous.length === length && previous.reps === reps ? previous : { length, reps }
      );
    };

    measure();
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [path, unit, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    const { length } = metrics;
    const head = headRef.current;
    const tail = tailRef.current;
    if (!head || !tail || !length) return undefined;

    const apply = offset => {
      const partner = offset >= 0 ? offset - length : offset + length;
      head.setAttribute('startOffset', String(offset));
      tail.setAttribute('startOffset', String(partner));
    };

    apply(0);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || speed <= 0) return undefined;

    const state = { offset: 0 };
    const tween = gsap.to(state, {
      offset: direction === 'reverse' ? -length : length,
      duration: length / speed,
      ease: 'none',
      repeat: -1,
      onUpdate: () => apply(state.offset)
    });
    const root = rootRef.current;
    const pause = () => tween.pause();
    const resume = () => tween.resume();

    if (pauseOnHover && root) {
      root.addEventListener('pointerenter', pause);
      root.addEventListener('pointerleave', resume);
    }

    return () => {
      tween.kill();
      root?.removeEventListener('pointerenter', pause);
      root?.removeEventListener('pointerleave', resume);
    };
  }, [metrics, speed, direction, pauseOnHover]);

  const loopText = unit.repeat(metrics.reps);
  const fitLength = metrics.length || undefined;

  return (
    <div ref={rootRef} className={`text-loop ${className}`.trim()} style={style}>
      <svg
        className="text-loop-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Workshops, mentorship, innovation"
      >
        <path
          ref={pathRef}
          id={pathId}
          className="text-loop-ribbon"
          d={path}
          fill="none"
          stroke={ribbon ? ribbonColor : 'none'}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text ref={measureRef} className="text-loop-measure" style={textStyle} aria-hidden="true">
          {unit}
        </text>
        {[headRef, tailRef].map((ref, index) => (
          <text
            key={index}
            className="text-loop-text"
            style={textStyle}
            fill={color}
            dominantBaseline="central"
            aria-hidden="true"
            textLength={fitLength}
            lengthAdjust="spacing"
          >
            <textPath ref={ref} href={`#${pathId}`} startOffset="0">
              {loopText}
            </textPath>
          </text>
        ))}
      </svg>
    </div>
  );
}
