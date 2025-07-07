"use client";

import { Typography } from "@app/styles";
import styled from "@emotion/styled";

export const TextBanner = () => {
  return (
    <S.TextBannerWrapper>
      <S.Text>
        JISOO KOH,
        <br />
        PORTPOLIO
      </S.Text>
    </S.TextBannerWrapper>
  );
};

export namespace S {
  export const TextBannerWrapper = styled.section`
    padding: 40px 0;
  `;

  export const Text = styled.p`
    ${Typography.ExtraLarge};
  `;
}
