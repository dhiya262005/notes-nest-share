import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SubjectCardProps {
  icon: LucideIcon;
  title: string;
  notesCount: number;
  color: string;
  onClick: () => void;
}

const SubjectCard = ({ icon: Icon, title, notesCount, color, onClick }: SubjectCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="group cursor-pointer border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1"
    >
      <CardContent className="p-6">
        <div 
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {notesCount} notes available
        </p>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
