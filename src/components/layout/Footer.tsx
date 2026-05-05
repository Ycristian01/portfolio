"use client";

import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { NavLink } from "@/components/ui/NavLink";
import { navLinks as navLinksEn } from "@/data/navigation";
import { navLinks as navLinksEs } from "@/data/navigation.es";
import { ui as uiEn } from "@/data/ui-strings.en";
import { ui as uiEs } from "@/data/ui-strings.es";

type FooterProps = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
};

export function Footer({ name, email, github, linkedin }: FooterProps) {
  const pathname = usePathname();
  const isEs = pathname.startsWith("/es");
  const navLinks = isEs ? navLinksEs : navLinksEn;
  const ui = isEs ? uiEs : uiEn;

  return (
    <footer className="relative z-10 border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} {name}
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
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.footerGithubAriaLabel}
            className="text-muted hover:text-foreground transition-colors"
          >
            <GithubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.footerLinkedinAriaLabel}
            className="text-muted hover:text-foreground transition-colors"
          >
            <LinkedinIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label={ui.footerEmailAriaLabel}
            className="text-muted hover:text-foreground transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
