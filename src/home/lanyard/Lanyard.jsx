/* eslint-disable react/no-unknown-property */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint
} from '@react-three/rapier';
import * as THREE from 'three';

import './Lanyard.css';

const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
const cardGLB = '/assets/models/lanyard/card.glb';
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };
const DESKTOP_BAND_SEGMENTS = 32;
const MOBILE_BAND_SEGMENTS = 18;

const createRibbonGeometry = segments => {
  const vertexCount = (segments + 1) * 2;
  const positions = new Float32Array(vertexCount * 3);
  const uvs = new Float32Array(vertexCount * 2);
  const indices = [];

  for (let index = 0; index <= segments; index += 1) {
    const progress = index / segments;
    uvs.set([0, progress, 1, progress], index * 4);
    if (index < segments) {
      const offset = index * 2;
      indices.push(offset, offset + 2, offset + 1, offset + 1, offset + 2, offset + 3);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  return geometry;
};

export default function Lanyard({
  position = [0, 0, 34],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  frontCaption = '',
  frontImageFit = 'contain',
  backImageFit = 'contain',
  frontImageArtwork = true,
  lanyardWidth = 1,
  nextPageTarget = '#about'
}) {
  const animationTimerRef = useRef(null);
  const pullGestureRef = useRef(null);
  const pagePullingRef = useRef(false);
  const pullStartScrollRef = useRef(0);
  const [animationActive, setAnimationActive] = useState(true);
  const [adaptiveDpr, setAdaptiveDpr] = useState(1.75);
  const [flipRequest, setFlipRequest] = useState(0);
  const [wakeRequest, setWakeRequest] = useState(0);
  const [pullAnimation, setPullAnimation] = useState({ active: false, distance: 0 });
  const [viewportSize, setViewportSize] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900
  }));
  const { width: viewportWidth, height: viewportHeight } = viewportSize;
  const isMobile = viewportWidth < 768;
  const renderDpr = Math.min(isMobile ? 1.25 : 1.75, adaptiveDpr);
  const originalCanvasRatio = viewportWidth <= 700
    ? 0.48
    : viewportWidth <= 1100
      ? Math.min(0.64, 576 / viewportHeight)
      : Math.min(0.78, 736 / viewportHeight);
  const cardScale =
    THREE.MathUtils.clamp(2.6 + (viewportWidth - 390) * 0.00116, 2.6, 4.4) * originalCanvasRatio * 0.9;

  useEffect(() => {
    const handleResize = () => setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const requestFrames = useCallback((settleMs = 0) => {
    window.clearTimeout(animationTimerRef.current);
    setAnimationActive(true);
    if (settleMs > 0) {
      animationTimerRef.current = window.setTimeout(() => setAnimationActive(false), settleMs);
    }
  }, []);

  useEffect(() => {
    requestFrames(1600);
    return () => window.clearTimeout(animationTimerRef.current);
  }, [requestFrames]);

  const getTargetScroll = () => {
    const target = document.querySelector(nextPageTarget);
    return target ? target.getBoundingClientRect().top + window.scrollY : window.innerHeight;
  };

  const beginPagePull = () => {
    if (pagePullingRef.current) return;
    pagePullingRef.current = true;
    pullStartScrollRef.current = window.scrollY;
  };

  const updatePagePull = progress => {
    const eased = 1 - Math.pow(1 - Math.min(Math.max(progress, 0), 1), 3);
    const start = pullStartScrollRef.current;
    window.scrollTo(0, start + (getTargetScroll() - start) * eased);
  };

  const finishPagePull = complete => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    pagePullingRef.current = false;
    window.scrollTo({
      top: complete ? getTargetScroll() : pullStartScrollRef.current,
      behavior: reducedMotion ? 'auto' : 'smooth'
    });
  };

  const startInteraction = event => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pullGestureRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      moved: false,
      pulling: false,
      progress: 0
    };
    setWakeRequest(value => value + 1);
    requestFrames();
  };

  const updateInteraction = event => {
    const gesture = pullGestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (Math.hypot(dx, dy) > 8) gesture.moved = true;

    const pullThreshold = Math.max(32, window.innerHeight * 0.035);
    if (!gesture.pulling && dy > pullThreshold && dy > Math.abs(dx) * 1.15) {
      gesture.pulling = true;
      beginPagePull();
      setPullAnimation({ active: true, distance: 0 });
    }

    if (!gesture.pulling) return;
    event.preventDefault();
    const travel = Math.max(window.innerHeight * 0.52, 260);
    gesture.progress = Math.min(Math.max((dy - pullThreshold) / travel, 0), 1);
    const visualTravel = Math.max(window.innerHeight * 0.18, 140);
    const visualProgress = Math.min(Math.max((dy - pullThreshold) / visualTravel, 0), 1);
    setPullAnimation({ active: true, distance: visualProgress * 1.75 });
    updatePagePull(gesture.progress);
    requestFrames();
  };

  const finishInteraction = (event, cancelled = false) => {
    const gesture = pullGestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    event.currentTarget.releasePointerCapture?.(event.pointerId);
    if (gesture.pulling) {
      setPullAnimation({ active: false, distance: 0 });
      finishPagePull(!cancelled && gesture.progress >= 0.35);
      requestFrames(900);
    } else if (!cancelled && !gesture.moved) {
      setFlipRequest(value => value + 1);
      requestFrames(850);
    } else {
      requestFrames(180);
    }
    pullGestureRef.current = null;
  };

  const handleInteractionKey = event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    setFlipRequest(value => value + 1);
    requestFrames(850);
  };

  const handleFrameRateSample = useCallback(fps => {
    setAdaptiveDpr(currentDpr => {
      if (fps < 35) return Math.min(currentDpr, 1);
      if (fps < 50) return Math.min(currentDpr, 1.25);
      return currentDpr;
    });
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        dpr={renderDpr}
        frameloop={animationActive ? 'always' : 'demand'}
        gl={{ alpha: transparent, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <FrameRateSampler onSample={handleFrameRateSample} />
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            frontCaption={frontCaption}
            frontImageFit={frontImageFit}
            backImageFit={backImageFit}
            frontImageArtwork={frontImageArtwork}
            lanyardWidth={lanyardWidth}
            cardScale={cardScale}
            flipRequest={flipRequest}
            wakeRequest={wakeRequest}
            pullActive={pullAnimation.active}
            pullDistance={pullAnimation.distance}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
      <div
        className="lanyard-interaction-area"
        role="button"
        tabIndex={0}
        aria-label="Click to flip the Temple IEEE badge, or pull it down to continue"
        onKeyDown={handleInteractionKey}
        onPointerDown={startInteraction}
        onPointerMove={updateInteraction}
        onPointerUp={event => finishInteraction(event)}
        onPointerCancel={event => finishInteraction(event, true)}
      />
    </div>
  );
}

function FrameRateSampler({ onSample }) {
  const sample = useRef({ elapsed: 0, frames: 0, warmup: 0.25 });

  useFrame((_, delta) => {
    const measurement = sample.current;
    const safeDelta = Math.min(delta, 0.1);

    if (measurement.warmup > 0) {
      measurement.warmup -= safeDelta;
      return;
    }

    measurement.elapsed += safeDelta;
    measurement.frames += 1;
    if (measurement.elapsed < 0.75) return;

    onSample(measurement.frames / measurement.elapsed);
    measurement.elapsed = 0;
    measurement.frames = 0;
  });

  return null;
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  frontCaption = '',
  frontImageFit = 'contain',
  backImageFit = 'contain',
  frontImageArtwork = true,
  lanyardWidth = 1,
  cardScale = 4,
  flipRequest = 0,
  wakeRequest = 0,
  pullActive = false,
  pullDistance = 0
}) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();
  const cardVisual = useRef();
  const flipAngle = useRef(0);
  const flipVelocity = useRef(0);
  const flipTarget = useRef(0);
  const strapTwistAngle = useRef(0);
  const strapTwistVelocity = useRef(0);
  const flipped = useRef(false);
  const handledFlipRequest = useRef(0);
  const handledWakeRequest = useRef(0);
  const pullOrigin = useRef(null);
  const pullReturning = useRef(false);
  const [pullKinematic, setPullKinematic] = useState(false);
  const viewport = useThree(state => state.viewport);
  const bandSegments = isMobile ? MOBILE_BAND_SEGMENTS : DESKTOP_BAND_SEGMENTS;
  const ribbonGeometry = useMemo(() => createRibbonGeometry(bandSegments), [bandSegments]);
  const ribbonScratch = useMemo(
    () => ({
      point: new THREE.Vector3(),
      tangent: new THREE.Vector3(),
      toCamera: new THREE.Vector3(),
      side: new THREE.Vector3(),
      previousSide: new THREE.Vector3(1, 0, 0),
      facing: new THREE.Vector3(),
      across: new THREE.Vector3()
    }),
    []
  );
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);
  const cardHalfWidth = (0.8 * cardScale) / 2.25;
  const anchorX = Math.min(
    viewport.width * 0.33,
    viewport.width / 2 - 1.4 - cardHalfWidth - 0.12
  );

  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image;
    const canvas = document.createElement('canvas');
    canvas.width = baseImg.width;
    canvas.height = baseImg.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

    const isolateLightArtwork = img => {
      const isolated = document.createElement('canvas');
      isolated.width = img.width;
      isolated.height = img.height;
      const isolatedCtx = isolated.getContext('2d', { willReadFrequently: true });
      if (!isolatedCtx) return img;
      isolatedCtx.drawImage(img, 0, 0);
      const pixels = isolatedCtx.getImageData(0, 0, isolated.width, isolated.height);
      for (let index = 0; index < pixels.data.length; index += 4) {
        const luminance =
          pixels.data[index] * 0.2126 +
          pixels.data[index + 1] * 0.7152 +
          pixels.data[index + 2] * 0.0722;
        pixels.data[index] = 255;
        pixels.data[index + 1] = 255;
        pixels.data[index + 2] = 255;
        pixels.data[index + 3] *= THREE.MathUtils.clamp((luminance - 90) / 100, 0, 1);
      }
      isolatedCtx.putImageData(pixels, 0, 0);
      return isolated;
    };

    const drawFitted = (img, rect, fit, background, isolateArtwork = false, punchHole = false) => {
      const rx = rect.x * canvas.width;
      const ry = rect.y * canvas.height;
      const rw = rect.w * canvas.width;
      const rh = rect.h * canvas.height;
      const drawable = isolateArtwork ? isolateLightArtwork(img) : img;
      const scale = (fit === 'contain' ? Math.min : Math.max)(rw / drawable.width, rh / drawable.height);
      const dw = drawable.width * scale;
      const dh = drawable.height * scale;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.fillStyle = background;
      ctx.fillRect(rx, ry, rw, rh);
      ctx.drawImage(drawable, rx + (rw - dw) / 2, ry + (rh - dh) / 2, dw, dh);
      if (punchHole) {
        ctx.fillStyle = '#05070a';
        ctx.beginPath();
        ctx.ellipse(rx + rw * 0.5, ry + rh * 0.075, rw * 0.03, rh * 0.045, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const drawCaption = (text, rect) => {
      if (!text) return;
      const rx = rect.x * canvas.width;
      const ry = rect.y * canvas.height;
      const rw = rect.w * canvas.width;
      const rh = rect.h * canvas.height;
      ctx.save();
      ctx.fillStyle = '#f7fafc';
      ctx.font = `600 ${Math.round(rw * 0.038)}px Chillax, Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text.toUpperCase(), rx + rw * 0.5, ry + rh * 0.79, rw * 0.84);
      ctx.restore();
    };

    if (frontImage && frontTex.image) {
      drawFitted(
        frontTex.image,
        FRONT_UV_RECT,
        frontImageFit,
        frontImageArtwork ? '#153242' : '#f7fafc',
        frontImageArtwork,
        true
      );
      drawCaption(frontCaption, FRONT_UV_RECT);
    }
    if (backImage && backTex.image) {
      drawFitted(backTex.image, BACK_UV_RECT, backImageFit, '#f7fafc', false, true);
    }

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [backImage, backImageFit, backTex, frontCaption, frontImage, frontImageArtwork, frontImageFit, frontTex, materials.base.map]);

  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.7]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.7]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.7]);
  const connectorOffset = -1.2 + cardScale * 1.2;
  useSphericalJoint(j3, card, [[0, 0, 0], [0, connectorOffset, 0]]);

  useFrame((state, delta) => {
    delta = Math.min(delta, 1 / 30);
    if (card.current && pullOrigin.current) {
      if (pullActive) {
        card.current.setNextKinematicTranslation({
          x: pullOrigin.current.x,
          y: pullOrigin.current.y - pullDistance,
          z: pullOrigin.current.z
        });
      } else if (pullReturning.current) {
        const current = card.current.translation();
        const blend = 1 - Math.exp(-delta * 12);
        const next = {
          x: current.x + (pullOrigin.current.x - current.x) * blend,
          y: current.y + (pullOrigin.current.y - current.y) * blend,
          z: current.z + (pullOrigin.current.z - current.z) * blend
        };
        card.current.setNextKinematicTranslation(next);

        if (Math.hypot(
          next.x - pullOrigin.current.x,
          next.y - pullOrigin.current.y,
          next.z - pullOrigin.current.z
        ) < 0.02) {
          card.current.setTranslation(pullOrigin.current, true);
          card.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
          pullReturning.current = false;
          pullOrigin.current = null;
          setPullKinematic(false);
        }
      }
    }

    if (fixed.current && card.current && band.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const distance = ref.current.lerped.distanceTo(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, distance));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      const twistDisplacement = flipTarget.current - strapTwistAngle.current;
      strapTwistVelocity.current += twistDisplacement * 18 * delta;
      strapTwistVelocity.current *= Math.exp(-6 * delta);
      strapTwistAngle.current += strapTwistVelocity.current * delta;

      const positions = band.current.geometry.attributes.position;
      const ribbonWidth = lanyardWidth * 0.22;
      const {
        point,
        tangent,
        toCamera,
        side,
        previousSide,
        facing,
        across
      } = ribbonScratch;

      for (let index = 0; index <= bandSegments; index += 1) {
        const progress = index / bandSegments;
        curve.getPoint(progress, point);
        curve.getTangent(progress, tangent).normalize();
        toCamera.subVectors(state.camera.position, point).normalize();
        side.crossVectors(toCamera, tangent);
        if (side.lengthSq() < 1e-8) side.copy(previousSide);
        else side.normalize();
        if (index > 0 && side.dot(previousSide) < 0) side.negate();
        previousSide.copy(side);

        facing.crossVectors(tangent, side).normalize();
        const twist = strapTwistAngle.current * Math.pow(1 - progress, 1.35);
        across.copy(side).multiplyScalar(Math.cos(twist)).addScaledVector(facing, Math.sin(twist));

        const halfWidth = ribbonWidth * 0.5;
        const vertex = index * 2;
        positions.setXYZ(
          vertex,
          point.x - across.x * halfWidth,
          point.y - across.y * halfWidth,
          point.z - across.z * halfWidth
        );
        positions.setXYZ(
          vertex + 1,
          point.x + across.x * halfWidth,
          point.y + across.y * halfWidth,
          point.z + across.z * halfWidth
        );
      }
      positions.needsUpdate = true;
    }

    if (cardVisual.current) {
      const displacement = flipTarget.current - flipAngle.current;
      flipVelocity.current += displacement * 24 * delta;
      flipVelocity.current *= Math.exp(-7 * delta);
      flipAngle.current += flipVelocity.current * delta;
      cardVisual.current.rotation.y = flipAngle.current;
    }
  });

  curve.curveType = 'chordal';
  const toggleCardFace = () => {
    flipped.current = !flipped.current;
    flipTarget.current = flipped.current ? Math.PI : 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      flipAngle.current = flipTarget.current;
      flipVelocity.current = 0;
      strapTwistAngle.current = flipTarget.current;
      strapTwistVelocity.current = 0;
      if (cardVisual.current) cardVisual.current.rotation.y = flipAngle.current;
    } else {
      flipVelocity.current = flipped.current ? 2.8 : -2.8;
    }
  };

  useEffect(() => {
    if (flipRequest === handledFlipRequest.current) return;
    handledFlipRequest.current = flipRequest;
    [card, j1, j2, j3].forEach(ref => ref.current?.wakeUp());
    toggleCardFace();
  }, [flipRequest]);

  useEffect(() => {
    if (wakeRequest === handledWakeRequest.current) return;
    handledWakeRequest.current = wakeRequest;
    [card, j1, j2, j3].forEach(ref => ref.current?.wakeUp());
  }, [wakeRequest]);

  useEffect(() => {
    if (pullActive) {
      if (!pullOrigin.current && card.current) {
        pullOrigin.current = { ...card.current.translation() };
      }
      pullReturning.current = false;
      setPullKinematic(true);
      [card, j1, j2, j3].forEach(ref => ref.current?.wakeUp());
    } else if (pullOrigin.current) {
      pullReturning.current = true;
    }
  }, [pullActive]);

  return (
    <>
      <group position={[anchorX, 5.35, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.35, 0, 0]} ref={j1} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[0.7, 0, 0]} ref={j2} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.05, 0, 0]} ref={j3} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody
          position={[1.4, 0, 0]}
          ref={card}
          {...segmentProps}
          type={pullKinematic ? 'kinematicPosition' : 'dynamic'}
          enabledRotations={[false, false, false]}
        >
          <CuboidCollider args={[(0.8 * cardScale) / 2.25, (1.125 * cardScale) / 2.25, 0.01]} />
          <group
            ref={cardVisual}
            scale={cardScale}
            position={[0, -1.2, -0.05]}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry}>
              <meshPhysicalMaterial color="#000000" roughness={0.35} metalness={0.75} />
            </mesh>
            <mesh geometry={nodes.clamp.geometry}>
              <meshPhysicalMaterial color="#000000" roughness={0.35} metalness={0.75} />
            </mesh>
          </group>
        </RigidBody>
      </group>
      <mesh
        ref={band}
        geometry={ribbonGeometry}
        frustumCulled={false}
        renderOrder={6}
      >
        <meshBasicMaterial
          color="#000000"
          depthTest={false}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(cardGLB);
