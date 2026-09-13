import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesPreview from '../components/ServicesPreview';
import FounderSection from '../components/FounderSection';
import VisionMissionSection from '../components/VisionMissionSection';
import WhyAVSSection from '../components/WhyAVSSection';
import TestimonialsPreview from '../components/TestimonialsPreview';
import FinalCTASection from '../components/FinalCTASection';
import ConsultationModal from '../components/ConsultationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState("General Guidance");

  const handleOpenModal = (requirement = "General Guidance") => {
    setSelectedRequirement(requirement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="main">

      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenModal={handleOpenModal}
      />

      {/* 2. SERVICES SECTION (3 PILLARS) */}
      <ServicesPreview
        onOpenModal={handleOpenModal}
      />

      {/* 3. ABOUT / FOUNDER SECTION */}
      <FounderSection
        onOpenModal={handleOpenModal}
      />

      {/* 4. VISION & MISSION SECTION */}
      <VisionMissionSection />

      {/* 5. WHY AVS SECTION (4 POINTS) */}
      <WhyAVSSection />

      {/* 6. TESTIMONIALS SECTION (GOOGLE REVIEWS) */}
      <TestimonialsPreview />

      {/* 6. FINAL CTA SECTION */}
      <FinalCTASection
        onOpenModal={handleOpenModal}
      />

      {/* INTERACTIVE LEAD CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialRequirement={selectedRequirement}
      />

    </main>
  );
}

