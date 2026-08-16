import { createFileRoute } from "@tanstack/react-router";
import { CallButtons, Section, SectionHeading } from "@/components/site/Bits";
import { useI18n } from "@/lib/i18n";
import { projects, stats } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "المشاريع | Exshad IT — أعمالنا ونتائجها" },
      {
        name: "description",
        content: "نماذج من مشاريع إكشاد آي تي: متاجر إلكترونية، منصات تعليمية، تطبيقات جوال وأنظمة تتبع.",
      },
      { property: "og:title", content: "المشاريع | Exshad IT" },
      { property: "og:description", content: "نماذج من أعمالنا ونتائجها الحقيقية." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const { t } = useI18n();

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={{ ar: "المشاريع", en: "Projects" }}
          title={{ ar: "أعمال نفتخر بنتائجها", en: "Work we're proud of" }}
          sub={{
            ar: "مشاريع متنوعة بين المتاجر والمنصات والتطبيقات والأنظمة والحملات.",
            en: "A mix of stores, platforms, apps, systems and campaigns.",
          }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="surface-card p-6 transition-transform hover:-translate-y-1">
              <span className="rounded-full bg-[var(--surface-2)] px-3 py-1 text-[11px] font-semibold text-primary">
                {t(p.category)}
              </span>
              <h3 className="mt-4 text-lg font-bold">{t(p.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.desc)}</p>
              <p className="mt-5 border-t border-border pt-4 text-sm font-bold text-primary">
                {t(p.result)}
              </p>
            </article>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="surface-card px-5 py-6 text-center">
              <dt dir="ltr" className="text-3xl font-extrabold text-primary">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{t(s.label)}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="surface-card hero-veil p-10 text-center">
          <h2 className="text-2xl font-extrabold">
            {t({ ar: "مشروعك القادم يبدأ بمكالمة", en: "Your next project starts with a call" })}
          </h2>
          <div className="mt-8 flex justify-center">
            <CallButtons compact />
          </div>
        </div>
      </Section>
    </>
  );
}
