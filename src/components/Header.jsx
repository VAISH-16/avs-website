import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav & dropdowns on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setServicesDropdownOpen(false);
    document.body.classList.remove('mobile-nav-active');
  }, [location]);

  const toggleMobileNav = () => {
    const nextState = !mobileNavOpen;
    setMobileNavOpen(nextState);
    if (nextState) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setServicesDropdownOpen(false);
    document.body.classList.remove('mobile-nav-active');
  };

  const toggleServicesDropdown = (e) => {
    // If on mobile view, allow toggling the dropdown sub-menu
    if (window.innerWidth < 1200) {
      e.stopPropagation();
      setServicesDropdownOpen((prev) => !prev);
    }
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between position-relative">

        {/* Brand Logo - Clicking Logo Navigates Home */}
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0 text-decoration-none" onClick={closeMobileNav}>
          <img
            src="/assets/img/avs-logo.png"
            alt="AVS Prosperity Logo"
            className="me-2 rounded-2 shadow-sm"
            style={{
              height: '56px',
              width: 'auto',
              objectFit: 'contain',
              backgroundColor: '#FFFFFF',
              padding: '2px 4px',
              border: '1px solid rgba(201, 162, 77, 0.5)',
            }}
          />
          <div className="d-none d-md-flex flex-column ms-1">
            <span className="fs-8 text-uppercase tracking-wider font-sans fw-bold" style={{ color: '#C9A24D', fontSize: '0.68rem', letterSpacing: '0.08em', lineHeight: '1.2' }}>
              ISO 9001:2015 CERTIFIED
            </span>
          </div>
        </Link>

        {/* Mobile Nav Overlay Background */}
        {mobileNavOpen && (
          <div
            className="mobile-nav-backdrop d-xl-none"
            onClick={closeMobileNav}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(7, 21, 36, 0.75)',
              backdropFilter: 'blur(4px)',
              zIndex: 9990
            }}
          />
        )}

        {/* Navigation Menu */}
        <nav id="navmenu" className={`navmenu ${mobileNavOpen ? 'active' : ''}`}>
          <ul className={mobileNavOpen ? 'mobile-ul-active' : ''}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileNav}>
                Home
              </NavLink>
            </li>

            {/* Services with Dropdown */}
            <li className={`dropdown-custom ${servicesDropdownOpen ? 'active-dropdown' : ''}`}>
              <div className="d-flex align-items-center justify-content-between w-100">
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? 'active me-2' : 'me-2')}
                  onClick={closeMobileNav}
                >
                  Services
                </NavLink>
                <button
                  type="button"
                  className="btn btn-sm text-gold border-0 p-1 d-inline-flex align-items-center"
                  onClick={toggleServicesDropdown}
                  aria-label="Toggle Services Submenu"
                  style={{ color: '#C9A24D' }}
                >
                  <i className={`bi ${servicesDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'} fs-7`}></i>
                </button>
              </div>

              <ul className={`dropdown-menu-custom ${servicesDropdownOpen ? 'show-mobile' : ''}`}>
                <li>
                  <NavLink to="/insurance" onClick={closeMobileNav}>
                    <span>Insurance</span> <i className="bi bi-shield-check" style={{ color: '#C9A24D' }}></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/investments" onClick={closeMobileNav}>
                    <span>Investments</span> <i className="bi bi-graph-up-arrow" style={{ color: '#C9A24D' }}></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/personal-finance" onClick={closeMobileNav}>
                    <span>Financial Planning</span> <i className="bi bi-compass" style={{ color: '#C9A24D' }}></i>
                  </NavLink>
                </li>
              </ul>
            </li>


            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileNav}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileNav}>
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileNav}>
                Contact
              </NavLink>
            </li>

            {/* Mobile Book Consultation Button inside Drawer */}
            <li className="d-block d-sm-none mt-3 pt-3 border-top border-secondary border-opacity-25">
              <Link
                to="/contact"
                className="btn btn-luxury-gold w-100 py-3 text-uppercase tracking-wider fw-bold text-center rounded-pill"
                onClick={closeMobileNav}
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
              >
                Book a Consultation &rarr;
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="mobile-nav-toggle d-xl-none border-0 bg-transparent p-2"
            onClick={toggleMobileNav}
            aria-label="Toggle Navigation Drawer"
            style={{ color: '#C9A24D', fontSize: '1.75rem', zIndex: 9999, cursor: 'pointer' }}
          >
            <i className={`bi ${mobileNavOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </nav>

        {/* Primary CTA */}
        <Link className="btn-header-cta d-none d-sm-inline-flex align-items-center text-uppercase tracking-wider fw-bold" to="/contact" onClick={closeMobileNav}>
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}

