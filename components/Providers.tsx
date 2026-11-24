"use client";

import { MotionConfig } from "framer-motion";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </MotionConfig>
  );
}
