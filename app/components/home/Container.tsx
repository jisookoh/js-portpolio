"use client";

import styled from "@emotion/styled";
import { Colors } from "@/app/styles";
import { MaxWidthLayout } from "@/app/components/layout";

export const HomeContainer = () => {
  return (
    <S.Container>
      <MaxWidthLayout>ss</MaxWidthLayout>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.main`
    background-color: ${Colors.White};
    color: ${Colors.DefaultTextColor};
  `;
}
