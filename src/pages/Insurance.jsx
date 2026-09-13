import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import RealLifeScenariosSection from '../components/RealLifeScenariosSection';
import InteractiveInsuranceSection from '../components/InteractiveInsuranceSection';
import GeneralInsuranceSection from '../components/GeneralInsuranceSection';
import ConsultationModal from '../components/ConsultationModal';

export default function Insurance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('General Insurance');

  const handleOpenModal = (requirement = 'General Insurance') => {
    setSelectedRequirement(requirement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="main pt-5">

      {/* Page Header */}
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Risk Management</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Insurance & Protection Solutions</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Safeguarding families, physical assets, motor fleets, health, and corporate liabilities with premier underwriting partners.
          </p>
        </div>
      </section>

      {/* Main 6 Interactive Insurance Category Cards Section */}
      <InteractiveInsuranceSection onOpenModal={handleOpenModal} />

      {/* Expanded 13 General Insurance Categories Deep-Dive Section */}
      <GeneralInsuranceSection onOpenModal={handleOpenModal} />

      {/* Interactive Real-Life Scenarios Section */}
      {/* <RealLifeScenariosSection /> */}

      {/* Consultation Section */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm title="Request an Insurance Coverage Review" />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialRequirement={selectedRequirement}
      />

    </main>
  );
}


