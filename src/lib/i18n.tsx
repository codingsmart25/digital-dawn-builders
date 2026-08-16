import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { L } from "@/content/site";

type Lang = "ar" | "en";

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggle: () => void;
  t: (value: L) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem("exshad-lang");
    if (stored === "en" || stored === "ar") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("exshad-lang", lang);
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "ar" ? "en" : "ar")), []);
  const t = useCallback((value: L) => value[lang], [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", toggle, t }),
    [lang, toggle, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
