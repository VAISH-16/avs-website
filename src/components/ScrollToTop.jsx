import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${visible ? 'active' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
