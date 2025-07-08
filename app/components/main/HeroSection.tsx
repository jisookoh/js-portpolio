"use client";

import styled from "@emotion/styled";
import { TextBanner } from "./TextBanner";
import { BubblesCanvas } from "./BubblesCanvas";
import { Icon } from "@app/icons";

export const HeroSection = () => {
  return (
    <S.SectionWrapper>
      <BubblesCanvas />
      <TextBanner />
      <Icon name="letter" />
    </S.SectionWrapper>
  );
};

export namespace S {
  export const SectionWrapper = styled.section``;
}
