import { BookOpen, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-lg font-bold text-foreground">StudyShare</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering students to share knowledge and succeed together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Notes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Upload Notes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Past Papers</a></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Popular Subjects</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Mathematics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Computer Science</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Physics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chemistry</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              support@studyshare.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 StudyShare. Made with ❤️ for students everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
