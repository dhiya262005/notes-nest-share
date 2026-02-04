import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NoteCard from "./NoteCard";
import SemesterTabs from "./SemesterTabs";

interface LatestNotesSectionProps {
  selectedSemester: string;
  onSemesterChange: (semester: string) => void;
  searchQuery: string;
}

const allNotes = [
  {
    title: "Complete Calculus Notes - Integration & Differentiation",
    subject: "Mathematics",
    semester: 1,
    author: "Alex Chen",
    date: "2 days ago",
    downloads: 1234,
    fileType: "PDF",
  },
  {
    title: "Quantum Mechanics Fundamentals - Wave Functions",
    subject: "Physics",
    semester: 3,
    author: "Sarah Johnson",
    date: "5 days ago",
    downloads: 892,
    fileType: "PDF",
  },
  {
    title: "Organic Chemistry Reactions Summary",
    subject: "Chemistry",
    semester: 2,
    author: "Mike Wilson",
    date: "1 week ago",
    downloads: 756,
    fileType: "DOCX",
  },
  {
    title: "Data Structures & Algorithms Complete Guide",
    subject: "Computer Science",
    semester: 4,
    author: "Emily Davis",
    date: "3 days ago",
    downloads: 2156,
    fileType: "PDF",
  },
  {
    title: "Microeconomics - Supply and Demand Analysis",
    subject: "Economics",
    semester: 2,
    author: "James Brown",
    date: "4 days ago",
    downloads: 543,
    fileType: "PDF",
  },
  {
    title: "Shakespeare's Works - Literary Analysis",
    subject: "English",
    semester: 1,
    author: "Lisa Anderson",
    date: "1 week ago",
    downloads: 421,
    fileType: "PDF",
  },
  {
    title: "Cell Biology - Mitosis and Meiosis",
    subject: "Biology",
    semester: 3,
    author: "David Kim",
    date: "6 days ago",
    downloads: 678,
    fileType: "PPTX",
  },
  {
    title: "Machine Learning Fundamentals - Neural Networks",
    subject: "Computer Science",
    semester: 6,
    author: "Anna Lee",
    date: "2 days ago",
    downloads: 1890,
    fileType: "PDF",
  },
];

const LatestNotesSection = ({ selectedSemester, onSemesterChange, searchQuery }: LatestNotesSectionProps) => {
  const filteredNotes = allNotes.filter((note) => {
    const matchesSemester = selectedSemester === "all" || note.semester.toString() === selectedSemester;
    const matchesSearch = searchQuery === "" || 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSemester && matchesSearch;
  });

  return (
    <section id="latest" className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Latest Notes
            </h2>
            <p className="mt-2 text-muted-foreground">
              Recently uploaded study materials from the community
            </p>
          </div>
          <Button variant="ghost" className="text-primary gap-2 self-start md:self-auto">
            View all notes
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <SemesterTabs 
          selectedSemester={selectedSemester} 
          onSemesterChange={onSemesterChange} 
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <NoteCard key={index} {...note} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No notes found matching your criteria. Try a different search or semester.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNotesSection;
