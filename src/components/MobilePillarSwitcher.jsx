import React, { useState } from 'react';

export default function MobilePillarSwitcher({ activeTab, setActiveTab }) {
  return (
    <div className="mobile-pillar-tabs d-lg-none my-4 text-center">
      <div className="btn-group w-100 shadow-sm" role="group" aria-label="Brand Pillars Mobile Switcher">
        <button
          type="button"
          className={`btn pillar-tab-btn ${activeTab === 'prosperity' ? 'active' : ''}`}
          onClick={() => setActiveTab('prosperity')}
        >
          <span className="pillar-badge me-2">🟢</span>
          <span>Prosperity (Wealth)</span>
        </button>
        <button
          type="button"
          className={`btn pillar-tab-btn ${activeTab === 'protection' ? 'active' : ''}`}
          onClick={() => setActiveTab('protection')}
        >
          <span className="pillar-badge me-2">🛡️</span>
          <span>Protection (Shield)</span>
        </button>
      </div>
    </div>
  );
}
