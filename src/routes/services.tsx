import { createFileRoute } from "@tanstack/react-router";
import { CallButtons, FeatureList, Section, SectionHeading } from "@/components/site/Bits";
import { useI18n } from "@/lib/i18n";
import { marketingServices, techServices, ui } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات | Exshad IT — خدمات تقنية وتسويقية" },
      {
        name: "description",
        content:
          "خدمات إكشاد آي تي: تطوير مواقع وتطبيقات، ذكاء اصطناعي، أمن سيبراني، متاجر إلكترونية، إدارة سوشيال ميديا وحملات ممولة.",
      },
      { property: "og:title", content: "الخدمات | Exshad IT" },
      { property: "og:description", content: "خدمات تقنية وتسويقية متكاملة لأعمالك." },
    ],
  }),
  component: Services,
});

function Services() {
  const { t } = useI18n();

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={{ ar: "الخدمات البرمجية", en: "Technical services" }}
          title={{ ar: "حلول تقنية ذكية لمستقبل أفضل", en: "Smart tech solutions for a better future" }}
          sub={{
            ar: "من التطبيقات والمواقع حتى السحابة والأمن السيبراني والذكاء الاصطناعي.",
            en: "From apps and websites to cloud, cybersecurity and AI.",
          }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techServices.map((s, i) => (
            <article key={i} className="surface-card p-6">
              <h3 className="text-lg font-bold">{t(s.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s.desc)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                {t(ui.startsFrom)}{" "}
                <span className="text-base font-bold text-primary">
                  {s.price} {t(ui.riyal)}
                </span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={{ ar: "الخدمات التسويقية", en: "Marketing services" }}
          title={{ ar: "تسويق يبني حضورك ويزيد مبيعاتك", en: "Marketing that builds presence and sales" }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((s, i) => (
            <article key={i} className="surface-card p-6">
              <h3 className="text-lg font-bold">{t(s.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s.desc)}</p>
              <FeatureList items={s.items} />
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="surface-card hero-veil p-10 text-center">
          <h2 className="text-2xl font-extrabold">
            {t({ ar: "ابدأ مشروعك معنا الآن", en: "Start your project with us" })}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t({ ar: "نصنع مستقبلك الرقمي باحترافية.", en: "We build your digital future professionally." })}
          </p>
          <div className="mt-8 flex justify-center">
            <CallButtons compact />
          </div>
        </div>
      </Section>
    </>
  );
}
