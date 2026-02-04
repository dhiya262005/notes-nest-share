import { BookOpen, Upload, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onUploadClick: () => void;
}

const Header = ({ onUploadClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground">StudyShare</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#subjects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Subjects
          </a>
          <a href="#latest" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Latest Notes
          </a>
          <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
        </nav>

        <Button onClick={onUploadClick} className="button-shadow gap-2">
          <Upload className="h-4 w-4" />
          Upload Notes
        </Button>
      </div>
    </header>
  );
};

export default Header;
