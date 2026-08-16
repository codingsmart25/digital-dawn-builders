import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { company, nav } from "@/content/site";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-24 border-t border-border/60 bg-[var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground">
              EX
            </span>
            <span className="font-extrabold">{t(company.name)}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t(company.tagline)}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold">{t({ ar: "روابط سريعة", en: "Quick links" })}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-primary">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold">{t({ ar: "تواصل معنا", en: "Contact" })}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              {t(company.contactName)}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a dir="ltr" href={`tel:${company.phoneHref}`} className="hover:text-primary">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${company.email}`} className="hover:text-primary">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {t(company.address)}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground">
        © 2026 {t(company.name)} — {company.domain}.{" "}
        {t({ ar: "جميع الحقوق محفوظة.", en: "All rights reserved." })}
      </div>
    </footer>
  );
}
