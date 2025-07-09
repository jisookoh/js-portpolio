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
      <Icon name="envelope" />
      <Icon name="phone" />
      <Icon name="robot" />
      <Icon name="blog" />
    </S.SectionWrapper>
  );
};

export namespace S {
  export const SectionWrapper = styled.section``;
}
