import { createFileRoute } from "@tanstack/react-router";
import { CallButtons, FeatureList, Section, SectionHeading } from "@/components/site/Bits";
import { useI18n } from "@/lib/i18n";
import { company, packages, systems, ui } from "@/content/site";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "عروضنا وباقاتنا | Exshad IT" },
      {
        name: "description",
        content: "باقات التسويق والأنظمة البرمجية من إكشاد آي تي: أسعار واضحة وميزات مفصلة لكل باقة.",
      },
      { property: "og:title", content: "عروضنا وباقاتنا | Exshad IT" },
      { property: "og:description", content: "باقات تسويق وأنظمة برمجية بأسعار واضحة." },
    ],
  }),
  component: Offers,
});

function Offers() {
  const { t } = useI18n();

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={{ ar: "باقات التسويق", en: "Marketing packages" }}
          title={{ ar: "باقاتنا التسويقية المصممة لنجاحك", en: "Marketing packages built for your success" }}
          sub={{
            ar: "اختر الباقة التي تناسب تطلعات مشروعك وابدأ رحلة النمو معنا اليوم.",
            en: "Choose the package that fits your project and start growing with us.",
          }}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <article
              key={i}
              className={`surface-card relative p-7 ${p.featured ? "glow-ring border-primary" : ""}`}
            >
              {p.featured && (
                <span className="absolute -top-3 start-6 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">
                  {t(ui.mostWanted)}
                </span>
              )}
              <p className="text-xs text-muted-foreground">{t(p.period)}</p>
              <h3 className="mt-1 text-xl font-bold">{t(p.name)}</h3>
              <div className="mt-4 flex items-end gap-2">
                {p.oldPrice && (
                  <span className="text-sm text-muted-foreground line-through">{p.oldPrice}</span>
                )}
                <span className="text-4xl font-extrabold text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground">{t(ui.riyal)}</span>
              </div>
              {p.note && <p className="mt-1 text-xs text-muted-foreground">{t(p.note)}</p>}
              <p className="mt-4 text-sm text-muted-foreground">{t(p.desc)}</p>
              <p className="mt-5 text-xs font-bold">{t(ui.includes)}</p>
              <FeatureList items={p.items} />
              <a href={`tel:${company.phoneHref}`} className="btn-primary mt-7 w-full">
                {t(ui.subscribeNow)}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={{ ar: "الأنظمة التسويقية", en: "Marketing systems" }}
          title={{ ar: "أنظمة تقنية متطورة لنمو مبيعاتك", en: "Advanced systems to grow your sales" }}
          sub={{
            ar: "أدوات برمجية تختصر عليك الجهد والوقت وتضاعف نتائجك التسويقية.",
            en: "Software tools that save time and multiply your marketing results.",
          }}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {systems.map((s, i) => (
            <article key={i} className="surface-card p-7">
              {s.badge && (
                <span className="rounded-full bg-[var(--surface-2)] px-3 py-1 text-[11px] font-bold text-primary">
                  {t(s.badge)}
                </span>
              )}
              <h3 className="mt-3 text-xl font-bold">{s.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t(ui.yearSub)}</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-primary">{s.price}</span>
                <span className="text-sm text-muted-foreground">{t(ui.riyal)}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(s.desc)}</p>
              <FeatureList items={s.items} />
              <a href={`tel:${company.phoneHref}`} className="btn-primary mt-7 w-full">
                {t(ui.subscribeSystem)}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="surface-card hero-veil p-10 text-center">
          <h2 className="text-2xl font-extrabold">
            {t({ ar: "تحتاج باقة مخصصة؟", en: "Need a custom package?" })}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t({ ar: "تواصل مع ", en: "Contact " })}
            {t(company.contactName)}
            {t({ ar: " ونصمم لك عرضًا يناسب ميزانيتك.", en: " and we'll tailor an offer to your budget." })}
          </p>
          <div className="mt-8 flex justify-center">
            <CallButtons compact />
          </div>
        </div>
      </Section>
    </>
  );
}
