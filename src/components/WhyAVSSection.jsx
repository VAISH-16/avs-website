import React from 'react';

export default function WhyAVSSection() {
  const points = [
    {
      title: 'ISO 9001:2015 CERTIFIED',
      description: 'Adhering to global quality management standards in advisory & service.',
      icon: 'bi-patch-check'
    },
    {
      title: 'PERSONALISED',
      description: 'Custom financial solutions built around your goals.',
      icon: 'bi-person-gear'
    },
    {
      title: 'PROTECTION + PROSPERITY',
      description: 'Protect what you have. Grow what you build.',
      icon: 'bi-shield-lock'
    },
    {
      title: 'LONG-TERM',
      description: 'A relationship beyond a single transaction.',
      icon: 'bi-hourglass-split'
    }
  ];

  return (
    <section className="section py-5 position-relative border-bottom border-gold-subtle" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-5">
        
        {/* Heading */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-4 font-serif text-emerald fw-bold mb-3" style={{ color: '#0B1F33' }}>
              WHY AVS PROSPERITY?
            </h2>
            <div className="luxury-divider mx-auto" style={{ width: '60px', height: '2px', backgroundColor: '#C9A24D' }}></div>
          </div>
        </div>

        {/* 4 Simple Points */}
        <div className="row g-4 justify-content-center">
          {points.map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div 
                className="p-4 p-xl-4 rounded-4 bg-white border border-gold-subtle text-center h-100 d-flex flex-column justify-content-between shadow-sm transition-all hover-lift"
                style={{ borderRadius: '18px', transition: 'all 0.3s ease' }}
              >
                <div>
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                    style={{ width: '56px', height: '56px', backgroundColor: 'rgba(201, 162, 77, 0.12)', border: '1px solid rgba(201, 162, 77, 0.3)' }}
                  >
                    <i className={`bi ${item.icon} fs-3`} style={{ color: '#C9A24D' }}></i>
                  </div>
                  
                  <h3 className="font-serif fw-bold fs-5 mb-3" style={{ color: '#0B1F33', letterSpacing: '0.04em' }}>
                    {item.title}
                  </h3>
                </div>

                <p className="font-sans text-muted fs-6 mb-0" style={{ color: '#5F6B73', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

