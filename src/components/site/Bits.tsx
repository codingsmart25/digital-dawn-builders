import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { company, ui } from "@/content/site";
import type { L } from "@/content/site";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: L;
  title: L;
  sub?: L;
  center?: boolean;
}) {
  const { t } = useI18n();
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-border bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-primary">
          {t(eyebrow)}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t(title)}</h2>
      {sub && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{t(sub)}</p>}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function FeatureList({ items }: { items: L[] }) {
  const { t } = useI18n();
  return (
    <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{t(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export function CallButtons({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-8"}`}>
      <a href={`tel:${company.phoneHref}`} className="btn-primary">
        {t(ui.callNow)} <span dir="ltr">{company.phone}</span>
      </a>
      <a
        href={`https://wa.me/${company.phoneHref.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        className="btn-ghost"
      >
        {t(ui.whatsapp)}
      </a>
    </div>
  );
}
