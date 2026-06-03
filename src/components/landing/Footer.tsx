import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  href: string;
}

interface FooterProps {
  companyName: string;
  links: FooterLink[];
  social: SocialLink[];
}

export default function Footer({ companyName, links, social }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-slate-900">
              {companyName}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Professional accessibility audits and software engineering. Protecting businesses from ADA risk since 2024.
            </p>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Links
            </h3>
            <ul className="mt-4 space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Social
            </h3>
            <ul className="mt-4 space-y-3">
              {social.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <span>{item.icon}</span>
                    <span>{item.href.replace(/^https?:\/\//, "")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
