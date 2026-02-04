import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden hero-gradient py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in">
            Share Knowledge,<br />
            <span className="text-white/90">Ace Your Exams</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Access thousands of study notes, PDFs, and resources shared by students worldwide. 
            Find materials by subject and semester.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notes, subjects, topics..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-12 pl-12 pr-4 bg-card text-foreground border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-white/50"
              />
            </div>
            <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold button-shadow">
              Search Notes
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-primary-foreground/70 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span>Popular:</span>
            {['Mathematics', 'Physics', 'Computer Science', 'Economics'].map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
