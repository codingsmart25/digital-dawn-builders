import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Gauge, Headphones, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CallButtons, FeatureList, Section, SectionHeading } from "@/components/site/Bits";
import { useI18n } from "@/lib/i18n";
import {
  advantages,
  company,
  marketingServices,
  packages,
  stats,
  techServices,
  testimonials,
  ui,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exshad IT | إكشاد آي تي — شريكك لصناعة مستقبل رقمي متفوق" },
      {
        name: "description",
        content:
          "إكشاد آي تي (exshad-it.com): تطوير مواقع ومتاجر وتطبيقات، أنظمة تسويقية، هوية بصرية وحملات ممولة. استشارة مجانية.",
      },
      { property: "og:title", content: "Exshad IT — شريكك لصناعة مستقبل رقمي متفوق" },
      {
        property: "og:description",
        content: "حلول تقنية وتسويقية متكاملة لنمو أعمالك: أنظمة، متاجر، تطبيقات وحملات.",
      },

    ],
  }),
  component: Home,
});

const advantageIcons = [Gauge, ShieldCheck, TrendingUp, Headphones];

function Home() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {company.domain}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            {t({ ar: "شريكك لصناعة ", en: "Your partner for an " })}
            <span className="text-gradient">
              {t({ ar: "مستقبل رقمي متفوق", en: "outstanding digital future" })}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t(ui.heroSub)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/support" className="btn-primary">
              {t(ui.freeConsult)}
            </Link>
            <Link to="/offers" className="btn-ghost">
              {t(ui.evaluate)}
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="surface-card px-5 py-6 text-center">
                <dt className="text-3xl font-extrabold text-primary">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{t(s.label)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Marketing services */}
      <Section>
        <SectionHeading
          eyebrow={{ ar: "الخدمات التسويقية", en: "Marketing services" }}
          title={{ ar: "خدمات تسويقية تصنع الفرق", en: "Marketing services that make a difference" }}
          sub={{
            ar: "نغطي رحلة علامتك كاملة من المحتوى والهوية حتى الحملات وتحسين التحويل.",
            en: "We cover your whole brand journey: content, identity, campaigns and conversion.",
          }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((s, i) => (
            <article key={i} className="surface-card p-6 transition-transform hover:-translate-y-1">
              <h3 className="text-lg font-bold">{t(s.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s.desc)}</p>
              <FeatureList items={s.items} />
            </article>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section>
        <SectionHeading
          eyebrow={{ ar: "عروضنا", en: "Our offers" }}
          title={{ ar: "باقاتنا التسويقية المصممة لنجاحك", en: "Marketing packages built for your success" }}
          sub={{
            ar: "اختر الباقة التي تناسب تطلعات مشروعك وابدأ رحلة النمو معنا اليوم.",
            en: "Pick the package that fits your ambitions and start growing today.",
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

      {/* Tech services */}
      <Section>
        <SectionHeading
          eyebrow={{ ar: "ما يميزنا", en: "What sets us apart" }}
          title={{ ar: "حلول تقنية ذكية لمستقبل أفضل", en: "Smart tech solutions for a better future" }}
          sub={{
            ar: "مجموعة شاملة من الخدمات التقنية المتكاملة لتعزيز نمو أعمالك.",
            en: "A complete range of integrated technical services to grow your business.",
          }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techServices.map((s, i) => (
            <article key={i} className="surface-card flex flex-col p-6">
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
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">
                  {t(ui.startsFrom)}{" "}
                  <span className="text-base font-bold text-primary">
                    {s.price} {t(ui.riyal)}
                  </span>
                </span>
                <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                  {t(ui.discover)} <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-0 ltr:rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Advantages */}
      <Section>
        <SectionHeading
          eyebrow={{ ar: "لماذا إكشاد؟", en: "Why Exshad?" }}
          title={{ ar: "نتميز بتقديم حلول متكاملة تلبي طموحاتك", en: "Integrated solutions that match your ambition" }}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => {
            const Icon = advantageIcons[i] ?? Sparkles;
            return (
              <article key={i} className="surface-card p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[var(--surface-2)]">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 font-bold">{t(a.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(a.desc)}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow={{ ar: "آراء العملاء", en: "Testimonials" }}
          title={{ ar: "ماذا يقول عملاؤنا", en: "What our clients say" }}
          sub={{
            ar: "نفخر بثقة عملائنا وشراكتنا معهم في تحقيق أهدافهم الرقمية.",
            en: "We're proud of our clients' trust in reaching their digital goals.",
          }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <figure key={i} className="surface-card p-6">
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                “{t(tm.quote)}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <span className="block font-bold">{t(tm.name)}</span>
                <span className="block text-xs text-muted-foreground">{t(tm.role)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="surface-card glow-ring hero-veil p-10 text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            {t({ ar: "هل لديك مشروع طموح في ذهنك؟", en: "Have an ambitious project in mind?" })}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            {t({
              ar: "دعنا نتحدث عن كيف يمكننا تحويل رؤيتك إلى واقع رقمي استثنائي. تواصل مباشرة مع ",
              en: "Let's talk about turning your vision into reality. Reach out directly to ",
            })}
            {t(company.contactName)}.
          </p>
          <div className="mt-8 flex justify-center">
            <CallButtons compact />
          </div>
        </div>
      </Section>
    </>
  );
}
