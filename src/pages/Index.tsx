import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubjectsSection from "@/components/SubjectsSection";
import LatestNotesSection from "@/components/LatestNotesSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import UploadModal from "@/components/UploadModal";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const handleSubjectClick = (subject: string) => {
    setSearchQuery(subject);
    document.getElementById("latest")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onUploadClick={() => setUploadModalOpen(true)} />
      
      <main>
        <HeroSection 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        <SubjectsSection onSubjectClick={handleSubjectClick} />
        
        <LatestNotesSection 
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
          searchQuery={searchQuery}
        />
        
        <ResourcesSection />
      </main>

      <Footer />
      
      <UploadModal 
        open={uploadModalOpen} 
        onOpenChange={setUploadModalOpen} 
      />
    </div>
  );
};

export default Index;
