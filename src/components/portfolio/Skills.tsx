import { lazy, Suspense } from "react";
import { usePortfolio } from "./PortfolioContext";
import { SectionTitle } from "./About";

// three.js is heavy: keep it out of the initial bundle.
const SkillsCube = lazy(() => import("./SkillsCube"));
export function Skills() {
  const { t, lang } = usePortfolio();
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle sub={t.skills.subtitle}>{t.skills.title}</SectionTitle>
        <div className="mt-12 min-h-[24rem]">
          <Suspense fallback={null}>
            <SkillsCube lang={lang} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
