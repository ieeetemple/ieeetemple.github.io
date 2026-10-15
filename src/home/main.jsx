import { createRoot } from 'react-dom/client';
import HomeInteractive from './HomeInteractive.jsx';
import ProgramGalleries from './ProgramGalleries.jsx';
import SlingButton from './SlingButton.jsx';

const container = document.getElementById('home-interactive-root');

if (container) {
  createRoot(container).render(<HomeInteractive />);
}

const backToTopRoot = document.getElementById('back-to-top-root');

if (backToTopRoot) {
  createRoot(backToTopRoot).render(
    <SlingButton
      target="#home"
      direction="up"
      ariaLabel="Back to the first page"
      className="sling-control--return"
    />
  );
}

document.querySelectorAll('[data-program-gallery]').forEach(galleryRoot => {
  createRoot(galleryRoot).render(
    <ProgramGalleries gallery={galleryRoot.dataset.programGallery || 'auto'} />
  );
});
