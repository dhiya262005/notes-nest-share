import { Download, FileText, Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NoteCardProps {
  title: string;
  subject: string;
  semester: number;
  author: string;
  date: string;
  downloads: number;
  fileType: string;
}

const NoteCard = ({ title, subject, semester, author, date, downloads, fileType }: NoteCardProps) => {
  return (
    <Card className="group border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {fileType}
          </Badge>
        </div>
        
        <h3 className="mt-4 font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs font-normal">
            {subject}
          </Badge>
          <Badge variant="outline" className="text-xs font-normal">
            Sem {semester}
          </Badge>
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-border/50 p-4">
        <Button variant="ghost" className="w-full gap-2 text-primary hover:text-primary hover:bg-primary/10">
          <Download className="h-4 w-4" />
          Download ({downloads})
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
