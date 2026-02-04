import { BookOpen, Video, FileQuestion, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const resources = [
  {
    icon: BookOpen,
    title: "Textbook Summaries",
    description: "Condensed versions of popular textbooks",
    count: 450,
  },
  {
    icon: Video,
    title: "Video Lectures",
    description: "Recorded lectures and tutorials",
    count: 230,
  },
  {
    icon: FileQuestion,
    title: "Past Papers",
    description: "Previous exam papers with solutions",
    count: 890,
  },
  {
    icon: GraduationCap,
    title: "Study Guides",
    description: "Comprehensive exam preparation guides",
    count: 320,
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Study Resources
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Beyond notes, explore our collection of study resources to help you succeed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <Card 
              key={resource.title}
              className="group cursor-pointer border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 card-shadow hover:card-shadow-hover"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {resource.description}
                </p>
                <p className="mt-3 text-2xl font-bold text-primary">
                  {resource.count}+
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
