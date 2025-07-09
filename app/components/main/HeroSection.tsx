"use client";

import styled from "@emotion/styled";
import { TextBanner } from "./TextBanner";
import { BubblesCanvas } from "./BubblesCanvas";
import { Contact } from "./Contact";

export const HeroSection = () => {
  return (
    <S.SectionWrapper>
      <BubblesCanvas />
      <TextBanner />
      <Contact />
    </S.SectionWrapper>
  );
};

export namespace S {
  export const SectionWrapper = styled.section`
    padding: 40px 0;
  `;
}
