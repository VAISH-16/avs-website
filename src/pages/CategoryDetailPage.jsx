import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationModal from '../components/ConsultationModal';
import { trackEvent } from '../utils/analytics';

export default function CategoryDetailPage() {
  const { catId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [catId]);

  const allCategoriesData = {
    health: {
      id: 'health',
      title: 'Health & Mediclaim',
      tagline: 'Comprehensive cashless medical cover & family health security',
      icon: 'bi-heart-pulse-fill',
      description: 'Protecting your family from rising healthcare inflation, emergency hospitalizations, and specialized medical treatments.',
      types: [
        { name: 'Individual Health Insurance', summary: 'Comprehensive medical cover for an individual including room rent, ICU expenses, and pre/post-hospitalization.' },
        { name: 'Family Floater Health Insurance', summary: 'A single shared sum insured covering entire family under one umbrella policy for cost-effective protection.' },
        { name: 'Senior Citizen Health Insurance', summary: 'Tailored health coverage for elders aged 60+ with pre-existing disease support and health checkups.' },
        { name: 'Group Health Insurance', summary: 'Customized health coverage provided by employers or organizations to safeguard employees and their families.' },
        { name: 'Corporate Health Insurance', summary: 'Comprehensive health benefits package designed for corporate workforces with cashless network access.' },
        { name: 'Critical Illness Insurance', summary: 'Fixed cash payout upon diagnosis of life-threatening illnesses such as cancer, stroke, or heart attack.' },
        { name: 'Personal Accident Insurance', summary: 'Financial compensation for accidental disability, permanent impairment, or accidental death.' },
        { name: 'Super Top-Up Health Insurance', summary: 'Enhanced top-up policy that calculates cumulative medical bills over the policy year to cross deductible.' },
        { name: 'Maternity Insurance', summary: 'Coverage for pre-and-post natal care, delivery expenses, and newborn infant medical care.' },
        { name: 'Disease-Specific Health Plans', summary: 'Specialized policies targeting specific illnesses like diabetes, cardiac conditions, or cancer.' },
        { name: 'Overseas Medical Insurance', summary: 'Emergency cashless hospital care and medical evacuations when traveling or staying abroad.' }
      ]
    },
    life: {
      id: 'life',
      title: 'Life & Term Insurance',
      tagline: 'High-sum income replacement & long-term wealth protection',
      icon: 'bi-shield-heart-fill',
      description: 'Safeguarding your dependents, debt commitments, and life milestones with structured life covers.',
      types: [
        { name: 'Term Life Insurance', summary: 'Pure financial protection providing high sum assured payout to dependents at very affordable premiums.' },
        { name: 'Pure Term Insurance', summary: 'Standard income replacement policy ensuring complete family lifestyle protection without investment risk.' },
        { name: 'Return of Premium Term Plan', summary: 'Term insurance plan that refunds 100% of all paid premiums if the policyholder survives the policy tenure.' },
        { name: 'Whole Life Insurance', summary: 'Financial protection providing lifetime coverage up to age 99/100 along with cash value growth.' },
        { name: 'Endowment Plans', summary: 'Dual benefit of guaranteed life insurance cover combined with disciplined long-term savings.' },
        { name: 'Money-Back Plans', summary: 'Periodic liquidity payouts during policy term along with full life cover and final maturity bonus.' },
        { name: 'Child Education Insurance Plans', summary: 'Dedicated funds securing your child\'s higher education and marriage goals even in your absence.' },
        { name: 'Retirement / Pension Plans', summary: 'Systematic wealth accumulation and guaranteed monthly annuity income streams for post-retirement.' },
        { name: 'ULIP', summary: 'Dual advantage of life insurance cover combined with equity or debt market investments.' },
        { name: 'Group Life Insurance', summary: 'Affordable group term insurance cover provided to corporate teams, societies, or associations.' },
        { name: 'Keyman Insurance', summary: 'Indemnity protection for business enterprises against financial loss caused by the demise of a key executive.' },
        { name: 'Group Gratuity / Employee Benefit Plans', summary: 'Structured corporate investment and protection solutions for statutory gratuity liabilities.' }
      ]
    },
    motor: {
      id: 'motor',
      title: 'Motor & Fleet Cover',
      tagline: 'Zero-depreciation motor insurance for personal & commercial fleets',
      icon: 'bi-car-front-fill',
      description: 'Complete road protection, instant towing assistance, and 100% cashless garage repairs.',
      types: [
        { name: 'Private Car Insurance', summary: 'Comprehensive protection for personal cars covering physical damage, theft, third-party liability, and add-ons.' },
        { name: 'Two-Wheeler Insurance', summary: 'Financial cover for scooters and motorcycles against road accidents, natural calamities, theft, and third-party harm.' },
        { name: 'Commercial Vehicle Insurance', summary: 'Protection for trucks, tempos, taxis, and commercial transport against operational risks and damages.' },
        { name: 'Truck Insurance', summary: 'Heavy commercial vehicle insurance covering cargo transport trucks against accident damage, rollover, and theft.' },
        { name: 'Bus Insurance', summary: 'Passenger-carrying commercial vehicle policy protecting school buses, private coaches, and staff transport.' },
        { name: 'Goods Carrying Vehicle Insurance', summary: 'Dedicated cover for logistics vehicles, delivery vans, and haulage trucks against transit accidents.' },
        { name: 'Fleet Insurance', summary: 'Single unified motor policy managing multi-vehicle fleets with bulk discount benefits and streamlined renewals.' },
        { name: 'Comprehensive Motor Insurance', summary: 'All-round cover including own vehicle damage, theft, fire perils, and compulsory third-party liability.' },
        { name: 'Third-Party Motor Insurance', summary: 'Mandatory legal cover for injury, death, or property damage caused to third-party road users.' },
        { name: 'Own Damage Cover', summary: 'Standalone protection covering repair expenses of your own vehicle caused by accidents, fire, or vandalism.' },
      ]
    },
    travel: {
      id: 'travel',
      title: 'Travel Insurance',
      tagline: 'Worldwide medical, baggage & flight protection for overseas travel',
      icon: 'bi-airplane-fill',
      description: 'Schengen-compliant international policies covering trip delays, lost passports, and emergency medical care.',
      types: [
        { name: 'Domestic Travel Insurance', summary: 'Coverage for trips within India including flight cancellations, medical emergencies, and lost baggage.' },
        { name: 'International Travel Insurance', summary: 'Overseas protection covering high international medical expenses, flight delays, and luggage loss.' },
        { name: 'Student Travel Insurance', summary: 'Comprehensive policy for students studying abroad including university fee protection and sponsor cover.' },
        { name: 'Senior Citizen Travel Insurance', summary: 'Tailored overseas medical and travel cover for travelers aged 60 to 85 without stringent medical checkups.' },
        { name: 'Family Travel Insurance', summary: 'Cost-effective single policy covering spouse, children, and parents under unified overseas sum insured.' },
        { name: 'Schengen Travel Insurance', summary: 'Mandatory €30,000 compliant medical travel insurance required for European Schengen visa approval.' },
        { name: 'Trip Cancellation Cover', summary: 'Compensation for non-refundable hotel and flight bookings if trips are canceled due to emergencies.' },
        { name: 'Trip Delay / Missed Connection Cover', summary: 'Reimbursement for essential accommodation, food, and rebooking costs during airline delays.' },
        { name: 'Baggage Loss / Delay Cover', summary: 'Financial allowance for purchasing emergency clothes/toiletries and full compensation for lost checked bags.' },
        { name: 'Passport Loss Cover', summary: 'Coverage for official expenses and embassy assistance incurred while obtaining a duplicate passport abroad.' },
        { name: 'Emergency Medical Cover', summary: 'Cashless overseas hospital admission, doctor fees, diagnostic tests, and air ambulance evacuations.' },
        { name: 'Adventure Sports Travel Cover', summary: 'Specialized travel protection covering high-risk sports like skiing, scuba diving, and trekking.' }
      ]
    },
    business: {
      id: 'business',
      title: 'Business & Asset Cover',
      tagline: 'Commercial property, fire perils, liability & business continuity',
      icon: 'bi-building-fill',
      description: 'Shielding commercial premises, plant machinery, marine cargo, and corporate legal liabilities.',
      types: [
        { name: 'Employee Compensation / Workmen Compensation', summary: 'Statutory coverage fulfilling employer liabilities for workplace injuries or occupational hazards.' },
        { name: 'Group Personal Accident', summary: 'Group policy compensating employees or members in the event of accidental death or permanent disablement.' },
        { name: 'Shop Insurance', summary: 'Package policy protecting retail shops and inventory against fire, burglary, natural disasters, and cash theft.' },
        { name: 'Office Insurance', summary: 'Comprehensive commercial cover for office premises, IT hardware, furniture, glass, and public liability.' },
        { name: 'Commercial Property Insurance', summary: 'Asset protection for factory premises, warehouses, industrial units, and commercial buildings.' },
        { name: 'Fire Insurance', summary: 'Indemnity against structural and asset damage caused by accidental fire, lightning, explosion, and storm.' },
        { name: 'Burglary Insurance', summary: 'Financial protection against loss or damage of stock, equipment, and goods due to forced break-in or theft.' },
        { name: 'Money Insurance', summary: 'Protection for cash, cheques, and drafts in transit between office and bank, or inside locked safes.' },
        { name: 'Machinery Breakdown Insurance', summary: 'Coverage for sudden electrical or mechanical breakdown of industrial machinery and equipment.' },
        { name: 'Electronic Equipment Insurance', summary: 'Protection for sensitive electronic items like servers, computers, medical devices, and UPS systems.' },
        { name: 'Business Interruption Insurance', summary: 'Income loss protection covering lost net profits and ongoing fixed expenses during disaster shutdowns.' },
        { name: 'Marine Cargo Insurance', summary: 'Coverage for raw materials and finished goods during transit via sea, air, rail, road, or courier.' },
        { name: 'Marine Hull Insurance', summary: 'Protection for ships, barges, tugboats, vessels, and marine equipment against physical loss at sea.' },
        { name: "Contractor's All Risk Insurance", summary: 'All-round protection for civil construction works, building sites, and contractor equipment.' },
        { name: 'Erection All Risk Insurance', summary: 'Coverage for plant assembly, machinery erection, testing, and commissioning risks.' },
        { name: 'Liability Insurance', summary: 'Protection against legal claims, defense costs, and settlements arising from corporate operations.' },
        { name: 'Public Liability Insurance', summary: 'Financial safety against third-party bodily injury or property damage claims occurring on your premises.' },
        { name: 'Product Liability Insurance', summary: 'Protection against claims arising from defect-caused injury or damage linked to manufactured products.' },
        { name: 'Professional Indemnity Insurance', summary: 'Defense cost and liability protection for doctors, lawyers, chartered accountants, and consultants.' },
        { name: 'Cyber Insurance', summary: 'Coverage against cyber attacks, data breach notification costs, ransomware extortion, and forensic expenses.' },
      ]
    },
    general: {
      id: 'general',
      title: 'General Insurance',
      tagline: 'Broader "everything else" protection for assets, property & niche risks',
      icon: 'bi-shield-check-fill',
      description: 'Specialized risk management ranging from pet paw care and housing societies to crop and event covers.',
      types: [
        { name: 'Home Insurance', summary: 'Protection for residential structure and home contents against fire, earthquake, flood, burglary, and electrical damage.' },
        { name: 'Society / Housing Society Insurance', summary: 'Comprehensive policy covering housing society buildings, elevators, clubhouses, and common area liability.' },
        { name: 'Shop Insurance', summary: 'Package policy protecting commercial shop premises, stock in trade, counter cash, and public claims.' },
        { name: 'Office Insurance', summary: 'All-in-one protection for office interiors, computers, fixtures, loss of cash, and employer liabilities.' },
        { name: 'Fire Insurance', summary: 'Basic and special perils cover protecting assets against fire, implosion, burst pipes, and natural perils.' },
        { name: 'Burglary Insurance', summary: 'Indemnity for stolen goods, destroyed inventory, and damaged locks resulting from housebreaking.' },
        { name: 'Personal Accident Insurance', summary: 'Individual or family financial cover providing lump sum benefits for accidental death or disability.' },
        { name: 'Liability Insurance', summary: 'Defense and indemnity cover shielding individuals and business owners against legal liabilities.' },
        { name: 'Cyber Insurance', summary: 'Protection against digital fraud, identity theft, malware damage, and online financial scams.' },
        { name: 'Marine Insurance', summary: 'Comprehensive transit cover for goods shipped locally or internationally by land, sea, or air.' },
        { name: 'Engineering Insurance', summary: 'Project and equipment policies covering machinery breakdown, CAR, EAR, and electronic items.' },
        { name: 'Property Insurance', summary: 'Real estate and physical asset insurance protecting residential, commercial, and industrial structures.' },
        { name: 'Employee / Group Insurance', summary: 'Group medical and accidental death policies designed to attract and retain corporate workforce.' },
        { name: 'Event Insurance', summary: 'Cancellation and liability cover for weddings, corporate conferences, concerts, and public exhibitions.' },
        { name: 'Pet Insurance / Paw Care', summary: 'Medical and accident protection for dogs and cats covering veterinary surgery, illness, and third-party harm.' },
        { name: 'Agriculture / Crop Insurance', summary: 'Yield and weather index protection safeguarding farmers against drought, flood, pests, and crop loss.' },
        { name: 'Miscellaneous Insurance', summary: 'Custom specialty insurance covers for fine art, high-value jewellery, drones, and rare collectibles.' }
      ]
    }
  };

  const category = allCategoriesData[catId] || allCategoriesData['general'];

  const filteredTypes = category.types.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenModal = (typeName) => {
    trackEvent('category_detail_quote_click', { category: category.title, type: typeName });
    setSelectedRequirement(`${category.title} - ${typeName}`);
    setIsModalOpen(true);
  };

  return (
    <main className="main pt-5 bg-ivory min-vh-100">

      {/* Category Header Banner */}
      <section className="page-header py-5 text-light position-relative" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-4">

          {/* Breadcrumb & Navigation Back */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link to="/insurance" className="btn btn-outline-light btn-sm rounded-pill px-3 py-2 fs-7 fw-semibold">
              <i className="bi bi-arrow-left me-1"></i> Back to All Categories
            </Link>

            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold">
              AVS RISK MANAGEMENT
            </span>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="icon-circle bg-gold-subtle text-gold-accent d-inline-flex align-items-center justify-content-center rounded-3 p-3" style={{ width: '56px', height: '56px', background: 'rgba(201, 162, 77, 0.2)' }}>
                  <i className={`bi ${category.icon} fs-2`} style={{ color: '#C9A24D' }}></i>
                </div>
                <div>
                  <span className="badge bg-gold-accent text-dark font-sans fs-8 tracking-wider uppercase px-3 py-1 fw-bold">
                    {category.types.length} Policy Types Available
                  </span>
                  <h1 className="display-4 font-playfair text-white mt-1 mb-0 fw-bold">
                    {category.title}
                  </h1>
                </div>
              </div>

              <p className="lead font-serif text-light-opacity fs-5 mt-3 mb-0">
                "{category.tagline}"
              </p>
              <p className="font-sans text-secondary-light fs-6 mt-2">
                {category.description}
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="p-4 rounded-4 bg-white text-dark shadow-sm border border-gold-subtle text-start">
                <span className="fs-8 text-uppercase tracking-wider text-gold-accent font-sans fw-bold d-block mb-1">
                  NEED GUIDANCE?
                </span>
                <h4 className="font-playfair text-emerald fw-bold h5 mb-2" style={{ color: '#0B1F33' }}>
                  Speak with an Advisor
                </h4>
                <p className="fs-7 text-muted mb-3">
                  Our certified underwriters assess your exact risk profile to recommend optimal policy structures.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Full Category Advisory')}
                  className="btn btn-luxury-gold w-100 py-2 text-uppercase tracking-wider fw-bold fs-7"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                >
                  Request Category Quote &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Section: Live Search Bar & Insurance Type Cards */}
      <section className="section py-5">
        <div className="container py-2">

          {/* Live Search & Filter Bar */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="p-3 bg-white rounded-4 shadow-sm border border-gold-subtle d-flex align-items-center gap-3">
                <i className="bi bi-search fs-4 text-gold-accent ms-2" style={{ color: '#C9A24D' }}></i>
                <input
                  type="text"
                  className="form-control border-0 shadow-none fs-6 font-sans luxury-input p-0"
                  placeholder={`Search ${category.title} types (e.g. maternity, zero dep, critical, burglary, cyber)...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ background: 'transparent' }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn btn-link p-0 text-muted fs-6"
                    aria-label="Clear search"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2 px-2">
                <span className="fs-8 text-muted font-sans">
                  Showing <strong>{filteredTypes.length}</strong> of {category.types.length} insurance types
                </span>
                {searchQuery && (
                  <span className="fs-8 text-gold-accent font-sans fw-semibold">
                    Filtered by "{searchQuery}"
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Cards Grid: 2-3 Columns on Desktop, Single Column on Mobile */}
          {filteredTypes.length > 0 ? (
            <div className="row g-4">
              {filteredTypes.map((typeItem, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-12 d-flex">
                  <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white w-100 d-flex flex-column transition-all hover-lift" style={{ border: '1px solid #DDD8CC' }}>

                    {/* Card Header: Icon & Category Tag */}
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className="icon-circle bg-gold-subtle text-gold-accent d-inline-flex align-items-center justify-content-center rounded-3 p-2" style={{ width: '44px', height: '44px', background: 'rgba(201, 162, 77, 0.15)' }}>
                        <i className={`bi ${category.icon} fs-4`} style={{ color: '#C9A24D' }}></i>
                      </div>
                      <span className="badge bg-ivory text-dark font-sans fs-8 tracking-wider uppercase px-2 py-1 fw-semibold border border-gold-subtle" style={{ background: '#F4F1E8', color: '#0B1F33' }}>
                        {category.title.split('&')[0].trim()}
                      </span>
                    </div>

                    {/* Insurance Type Title */}
                    <h3 className="font-playfair text-emerald fw-bold h5 mb-2" style={{ color: '#0B1F33' }}>
                      {typeItem.name}
                    </h3>

                    {/* Summary Box */}
                    <div className="p-3 rounded-3 mb-4 flex-fill" style={{ background: '#F8F6F0', borderLeft: '3px solid #C9A24D' }}>
                      <span className="fs-8 text-uppercase tracking-wider text-muted font-sans fw-bold d-block mb-1">
                        Coverage Summary:
                      </span>
                      <p className="font-sans fs-7 text-dark mb-0 leading-snug">
                        {typeItem.summary}
                      </p>
                    </div>

                    {/* Card Footer Action */}
                    <div className="mt-auto pt-3 border-top border-gold-subtle d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-8 text-muted font-sans">
                        <i className="bi bi-shield-check me-1 text-gold-accent"></i> Verified Partner Cover
                      </span>

                      <button
                        type="button"
                        onClick={() => handleOpenModal(typeItem.name)}
                        className="btn btn-sm rounded-pill px-3 py-2 fs-7 text-uppercase tracking-wider fw-bold text-nowrap"
                        style={{ backgroundColor: '#0B1F33', color: '#C9A24D', border: 'none' }}
                      >
                        Get Quote <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 bg-white rounded-4 p-5 shadow-sm border border-gold-subtle max-w-xl mx-auto">
              <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <h4 className="font-playfair fw-bold text-dark mb-2">No Matching Cover Found</h4>
              <p className="text-muted fs-7 mb-4">
                We couldn't find any policy matching "{searchQuery}". Try searching for another term or request a custom underwriting review.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="btn btn-outline-dark btn-sm rounded-pill px-4 py-2 me-2"
              >
                Clear Search
              </button>
              <button
                onClick={() => handleOpenModal(searchQuery || 'Custom Underwriting Request')}
                className="btn btn-luxury-gold btn-sm rounded-pill px-4 py-2"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
              >
                Request Custom Cover &rarr;
              </button>
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="mt-5 text-center">
            <Link to="/insurance" className="btn btn-outline-dark rounded-pill px-4 py-2 fs-7 font-sans fw-bold">
              <i className="bi bi-arrow-left me-1"></i> Explore Other Insurance Categories
            </Link>
          </div>

        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm title={`Request a Review for ${category.title}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialRequirement={selectedRequirement}
      />

    </main>
  );
}
