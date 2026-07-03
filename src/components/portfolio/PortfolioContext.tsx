import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang } from "../../lib/portfolio-content";
type Theme = "dark" | "light";
interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
    t: (typeof content)[Lang];
}
const PortfolioCtx = createContext<Ctx | null>(null);
export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);
  const t = content[lang];
  return (
    <PortfolioCtx.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {children}
    </PortfolioCtx.Provider>
  );
}
export function usePortfolio() {
  const ctx = useContext(PortfolioCtx);
  if (!ctx) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return ctx;
}
