import { Link } from "@tanstack/react-router";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { company, nav, ui } from "@/content/site";

export function Header() {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground">
            EX
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold">{t(company.name)}</span>
            <span className="block text-[11px] text-muted-foreground">{company.domain}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="btn-ghost !px-3 !py-2 text-xs"
            aria-label="Switch language"
          >
            <Languages className="h-4 w-4" />
            {lang === "ar" ? "EN" : "ع"}
          </button>
          <Link to="/support" className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">
            {t(ui.startProject)}
          </Link>
          <button
            className="btn-ghost !px-3 !py-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
