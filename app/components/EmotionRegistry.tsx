"use client";

import { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import { emotionCache } from "../lib/emotion-cache";

type EmotionRegistryProps = {
  children: ReactNode;
};

export default function EmotionRegistry({ children }: EmotionRegistryProps) {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
