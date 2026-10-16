import React from 'react';
import { createRoot } from 'react-dom/client';

import TextCursor from './TextCursor';

const rootElement = document.getElementById('board-text-cursor-root');

if (rootElement) {
  createRoot(rootElement).render(
    <TextCursor
      text="Scroll Down"
      mode="stamp"
      fontSize={25}
      spacing={150}
      maxPoints={4}
      shrink={0.5}
      fade={0.6}
      smoothing={0.3}
      exitDuration={0.5}
      removalInterval={30}
      followMouseDirection={true}
      keepUpright={true}
      randomFloat={true}
      popIn={true}
      hideCursor
    />
  );
}
