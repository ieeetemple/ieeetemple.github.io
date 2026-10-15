import { useEffect, useState } from 'react';
import AccordionGallery from './AccordionGallery.jsx';

const galleries = {
  workshops: [
    { image: '/assets/images/home/workshops/soldering-1.png', label: 'Soldering Workshop', alt: 'Temple IEEE members at a soldering workshop' },
    { image: '/assets/images/home/workshops/soldering-with-nsbe.jpeg', label: 'Soldering with NSBE', alt: 'Temple IEEE soldering workshop in collaboration with NSBE' },
    { image: '/assets/images/home/workshops/celus-workshop.jpeg', label: 'CELUS Workshop', alt: 'Temple IEEE members at a CELUS workshop' },
    { image: '/assets/images/home/workshops/arduino.png', label: 'Arduino Workshop', alt: 'Temple IEEE Arduino workshop' }
  ],
  community: [
    { image: '/assets/images/home/community/potluck.png', label: 'Student Potluck', alt: 'Temple IEEE members at a student potluck' },
    { image: '/assets/images/home/community/potluck-1.png', label: 'Community Potluck', alt: 'Temple IEEE community gathering at a potluck' },
    { image: '/assets/images/home/community/mario-kart.png', label: 'Mario Kart Social', alt: 'Temple IEEE members at a Mario Kart social' },
    { image: '/assets/images/home/community/mario-kart-1.png', label: 'Community Social', alt: 'Temple IEEE community playing Mario Kart together' }
  ],
  career: [
    { image: '/assets/images/home/career-connections/career-lockheed-session.png', label: 'Industry Session', alt: 'Lockheed Martin information session' },
    { image: '/assets/images/home/career-connections/lockheed.png', label: 'Career Connection', alt: 'Temple IEEE members connecting with Lockheed Martin' },
    { image: '/assets/images/home/career-connections/resume-workshop.jpg', label: 'Resume Workshop', alt: 'Temple IEEE resume workshop' },
    { image: '/assets/images/home/career-connections/headshot-photoshoot.jpeg', label: 'Headshot Photoshoot', alt: 'Temple IEEE professional headshot photoshoot' }
  ]
};

const sections = [
  { id: 'workshops', gallery: 'workshops' },
  { id: 'community', gallery: 'community' },
  { id: 'career-connections', gallery: 'career' }
];

export default function ProgramGalleries({ gallery = 'auto' }) {
  const automatic = gallery === 'auto';
  const initialGallery = galleries[gallery] ? gallery : 'workshops';
  const [activeGallery, setActiveGallery] = useState(initialGallery);

  useEffect(() => {
    if (!automatic) {
      setActiveGallery(initialGallery);
      return undefined;
    }

    let frame = 0;
    const updateActiveGallery = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      let closest = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < closestDistance) {
          closest = section;
          closestDistance = distance;
        }
      });

      setActiveGallery(current => current === closest.gallery ? current : closest.gallery);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveGallery);
    };

    updateActiveGallery();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [automatic, initialGallery]);

  return (
    <div className="program-accordion-shell" key={activeGallery}>
      <AccordionGallery
        items={galleries[activeGallery]}
        defaultIndex={1}
        orientation="vertical"
        height={450}
        expandRatio={0.68}
        ease="expo.out"
        showLabels={false}
        className="program-accordion-gallery"
      />
    </div>
  );
}
