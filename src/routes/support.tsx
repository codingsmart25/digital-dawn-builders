import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CallButtons, Section, SectionHeading } from "@/components/site/Bits";
import { useI18n } from "@/lib/i18n";
import { company, faqs } from "@/content/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "الدعم وتواصل معنا | Exshad IT" },
      {
        name: "description",
        content:
          "تواصل مع إكشاد آي تي: الأستاذ عبدالله حكمي +966 59 860 5303 لطلب استشارة مجانية أو دعم فني.",
      },
      { property: "og:title", content: "الدعم وتواصل معنا | Exshad IT" },
      { property: "og:description", content: "استشارة مجانية ودعم فني سريع من فريق إكشاد آي تي." },
    ],
  }),
  component: Support;
});

function Support() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={{ ar: "تواصل معنا", en: "Contact us" }}
          title={{ ar: "نحن هنا لمساعدتك", en: "We're here to help" }}
          sub={{
            ar: "لديك سؤال أو مشروع تريد مناقشته؟ تواصل معنا وسنرد عليك في أقرب وقت.",
            en: "Have a question or a project? Reach out and we'll reply shortly.",
          }}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <form
            className="surface-card space-y-4 p-7 lg:col-span-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success(
                t({
                  ar: "تم استلام رسالتك، سنتواصل معك قريبًا.",
                  en: "Your message was received. We'll be in touch soon.",
                }),
              );
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-semibold">{t({ ar: "الاسم الكامل", en: "Full name" })}</span>
                <input
                  required
                  placeholder={t({ ar: "أدخل اسمك", en: "Enter your name" })}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">{t({ ar: "البريد الإلكتروني", en: "Email" })}</span>
                <input
                  required
                  type="email"
                  dir="ltr"
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-semibold">{t({ ar: "الموضوع", en: "Subject" })}</span>
              <input
                required
                placeholder={t({ ar: "موضوع الرسالة", en: "Message subject" })}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold">{t({ ar: "الرسالة", en: "Message" })}</span>
              <textarea
                required
                rows={5}
                placeholder={t({
                  ar: "اكتب رسالتك هنا بالتفصيل...",
                  en: "Write your message in detail...",
                })}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </label>
            <button type="submit" className="btn-primary w-full">
              {t({ ar: "إرسال الرسالة الآن", en: "Send message" })}
            </button>
            {sent && (
              <p className="text-center text-xs text-primary">
                {t({
                  ar: "للرد الأسرع اتصل مباشرة على الرقم الظاهر بجانبك.",
                  en: "For the fastest reply, call the number shown next to the form.",
                })}
              </p>
            )}
          </form>

          <aside className="surface-card space-y-5 p-7 lg:col-span-2">
            <div className="flex items-start gap-3">
              <User className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-bold">{t({ ar: "مسؤول التواصل", en: "Contact person" })}</p>
                <p className="text-sm text-muted-foreground">{t(company.contactName)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-bold">{t({ ar: "الهاتف / واتساب", en: "Phone / WhatsApp" })}</p>
                <a
                  dir="ltr"
                  href={`tel:${company.phoneHref}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {company.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-bold">{t({ ar: "البريد الإلكتروني", en: "Email" })}</p>
                <a href={`mailto:${company.email}`} className="text-sm text-muted-foreground hover:text-primary">
                  {company.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-bold">{t({ ar: "العنوان", en: "Address" })}</p>
                <p className="text-sm text-muted-foreground">{t(company.address)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-bold">{t({ ar: "ساعات العمل", en: "Working hours" })}</p>
                <p className="text-sm text-muted-foreground">{t(company.hours)}</p>
              </div>
            </div>
            <CallButtons />
          </aside>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={{ ar: "الأسئلة الشائعة", en: "FAQ" }}
          title={{ ar: "أسئلة يتكرر سؤالها", en: "Frequently asked questions" }}
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="surface-card p-5">
              <summary className="cursor-pointer font-bold">{t(f.q)}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(f.a)}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
