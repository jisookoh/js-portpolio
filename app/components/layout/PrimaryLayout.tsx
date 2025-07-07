"use client";

import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Colors } from "@app/styles";
import { Header } from "@app/components/layout";

interface PrimaryLayoutProps {
  children: ReactNode;
}

export const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.MaxWidthWrapper>{children}</S.MaxWidthWrapper>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.main`
    background-color: ${Colors.White};
    color: ${Colors.DefaultTextColor};
  `;

  export const MaxWidthWrapper = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  `;
}
