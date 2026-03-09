import Link from "next/link";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-blue-600" />
            <span className="font-semibold">
              Kode<span className="text-blue-600">Vink</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/work" className="hover:text-foreground">
              Work
            </Link>
            <Link href="/services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@kodevink.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} KodeVink. Built by Vishal Patole.
          </p>
        </div>
      </div>
    </footer>
  );
}