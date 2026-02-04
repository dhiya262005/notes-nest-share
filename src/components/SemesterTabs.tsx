import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SemesterTabsProps {
  selectedSemester: string;
  onSemesterChange: (semester: string) => void;
}

const semesters = [
  { id: "all", label: "All Semesters" },
  { id: "1", label: "Semester 1" },
  { id: "2", label: "Semester 2" },
  { id: "3", label: "Semester 3" },
  { id: "4", label: "Semester 4" },
  { id: "5", label: "Semester 5" },
  { id: "6", label: "Semester 6" },
  { id: "7", label: "Semester 7" },
  { id: "8", label: "Semester 8" },
];

const SemesterTabs = ({ selectedSemester, onSemesterChange }: SemesterTabsProps) => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <Tabs value={selectedSemester} onValueChange={onSemesterChange} className="w-full">
        <TabsList className="inline-flex h-auto w-auto gap-1 bg-muted p-1 rounded-lg">
          {semesters.map((semester) => (
            <TabsTrigger
              key={semester.id}
              value={semester.id}
              className="rounded-md px-4 py-2 text-sm font-medium data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              {semester.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default SemesterTabs;
