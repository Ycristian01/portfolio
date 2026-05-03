import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { NavLink } from "@/components/ui/NavLink";
import { personal } from "@/data/personal";
import { navLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} {personal.name}
        </p>

        <nav className="flex items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-foreground transition-colors"
          >
            <GithubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-foreground transition-colors"
          >
            <LinkedinIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted hover:text-foreground transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
