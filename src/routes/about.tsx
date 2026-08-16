import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Target } from "lucide-react";
import { CallButtons, Section, SectionHeading } from "@/components/site/Bits";
import { useI18n } from "@/lib/i18n";
import { about, company, values } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | Exshad IT — شريكك التقني الموثوق" },
      {
        name: "description",
        content: "تعرّف على إكشاد آي تي: فريق تقني تأسس عام 2018 وينفذ مشاريع رقمية في العالم العربي.",
      },
      { property: "og:title", content: "من نحن | Exshad IT" },
      { property: "og:description", content: "فريق تقني تأسس 2018 لخدمة التحول الرقمي للشركات." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={{ ar: "من نحن", en: "About us" }}
          title={about.title}
          sub={about.body}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="surface-card p-7">
            <h3 className="text-lg font-bold">{t({ ar: "قيمنا الجوهرية", en: "Core values" })}</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t(v)}
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-7">
            <Compass className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-bold">{t({ ar: "رؤيتنا", en: "Our vision" })}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(about.vision)}</p>
          </article>

          <article className="surface-card p-7">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-bold">{t({ ar: "رسالتنا", en: "Our mission" })}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(about.mission)}</p>
          </article>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {about.facts.map((f) => (
            <div key={f.value} className="surface-card px-6 py-7 text-center">
              <dt dir="ltr" className="text-3xl font-extrabold text-primary">{f.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{t(f.label)}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="surface-card hero-veil p-10">
          <h2 className="text-2xl font-extrabold">
            {t({ ar: "المسؤول عن التواصل", en: "Your point of contact" })}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t(company.contactName)} —{" "}
            <span dir="ltr" className="font-bold text-primary">
              {company.phone}
            </span>
          </p>
          <CallButtons />
        </div>
      </Section>
    </>
  );
}
