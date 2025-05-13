import { Container } from 'react-bootstrap';
import Maintitlebar from '../MainHeadertext';
import separator1 from '../../assets/images/separator-1.png';
import './Instagram-follow.css';
import instaprofile1 from '../../assets/images/instagram-9.jpg';
import instaprofile2 from '../../assets/images/instagram-10.jpg';
import instaprofile3 from '../../assets/images/instagram-7.jpg';
import instaprofile4 from '../../assets/images/instagram-8.jpg';
import { useEffect, useRef, useState } from 'react';

const InstagramFollow = () => {
  const instaPosts = [
    { id: 1, image: instaprofile1, alt: 'Instagram post 1' },
    { id: 2, image: instaprofile2, alt: 'Instagram post 2' },
    { id: 3, image: instaprofile3, alt: 'Instagram post 3' },
    { id: 4, image: instaprofile4, alt: 'Instagram post 4' },
  ];

  const [displayPosts, setDisplayPosts] = useState([
    ...instaPosts,
    ...instaPosts,
  ]);
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    if (isHovered) return;

    const startAnimation = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const itemWidth = slider.children[0]?.offsetWidth || 0;
      const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
      const step = itemWidth + gap;

      currentIndexRef.current += 1;
      const newPosition = -currentIndexRef.current * step;

      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(${newPosition}px)`;

      if (currentIndexRef.current >= instaPosts.length) {
        setTimeout(() => {
          currentIndexRef.current = 0;
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(0)';
          void slider.offsetWidth;
        }, 500);
      }
    };

    animationRef.current = setInterval(startAnimation, 3000);

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [isHovered, instaPosts.length]);

  return (
    <section className="instagram-follow text-center py-4 py-sm-5">
      <Container>
        <div className="mb-4 mb-md-5">
          <Maintitlebar
            title="Follow Us On Instagram"
            description="Excepteur sint occaecat cupidatat"
            seperator={separator1}
          />
        </div>

        <div
          className="instagram-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="instagram-slider-container">
            <div className="instagram-slider-track" ref={sliderRef}>
              {displayPosts.map((post, index) => (
                <div key={`${post.id}-${index}`} className="instagram-slide">
                  <div className="instagram-post ratio ratio-1x1">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="img-fluid object-fit-cover"
                      loading="lazy"
                    />
                    <div className="instagram-overlay d-flex align-items-center justify-content-center">
                      <i className="bi bi-instagram fs-3 text-white"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InstagramFollow;
