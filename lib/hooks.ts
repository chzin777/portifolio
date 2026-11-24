import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/**
 * Marca a seção como ativa quando ela cruza o meio da viewport.
 * Usa rootMargin em vez de threshold para funcionar com seções mais altas que a tela.
 */
export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({ rootMargin: "-45% 0px -50% 0px" });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
