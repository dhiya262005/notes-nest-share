import { 
  Calculator, 
  Atom, 
  FlaskConical, 
  Code2, 
  TrendingUp, 
  BookText, 
  Dna, 
  Landmark 
} from "lucide-react";
import SubjectCard from "./SubjectCard";

interface SubjectsSectionProps {
  onSubjectClick: (subject: string) => void;
}

const subjects = [
  { icon: Calculator, title: "Mathematics", notesCount: 234, color: "hsl(221, 83%, 53%)" },
  { icon: Atom, title: "Physics", notesCount: 189, color: "hsl(262, 83%, 58%)" },
  { icon: FlaskConical, title: "Chemistry", notesCount: 156, color: "hsl(142, 76%, 36%)" },
  { icon: Code2, title: "Computer Science", notesCount: 312, color: "hsl(38, 92%, 50%)" },
  { icon: TrendingUp, title: "Economics", notesCount: 98, color: "hsl(0, 84%, 60%)" },
  { icon: BookText, title: "English", notesCount: 145, color: "hsl(190, 90%, 40%)" },
  { icon: Dna, title: "Biology", notesCount: 167, color: "hsl(330, 70%, 50%)" },
  { icon: Landmark, title: "History", notesCount: 89, color: "hsl(25, 90%, 50%)" },
];

const SubjectsSection = ({ onSubjectClick }: SubjectsSectionProps) => {
  return (
    <section id="subjects" className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Browse by Subject
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Find study materials organized by subject. Click on any subject to explore available notes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.title}
              icon={subject.icon}
              title={subject.title}
              notesCount={subject.notesCount}
              color={subject.color}
              onClick={() => onSubjectClick(subject.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
