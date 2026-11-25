"use client";

import { MotionConfig } from "framer-motion";
import ActiveSectionContextProvider from "@/context/active-section-context";
import LanguageContextProvider from "@/context/language-context";
import LanguageModal from "./LanguageModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageContextProvider>
        <ActiveSectionContextProvider>
          {children}
          <LanguageModal />
        </ActiveSectionContextProvider>
      </LanguageContextProvider>
    </MotionConfig>
  );
}
