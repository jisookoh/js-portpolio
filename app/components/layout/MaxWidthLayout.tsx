"use client";

import styled from "@emotion/styled";

interface MaxWidthLayoutProps {
  children: React.ReactNode;
}

export const MaxWidthLayout = ({ children }: MaxWidthLayoutProps) => {
  return <S.MaxWidthWrapper>{children}</S.MaxWidthWrapper>;
};

namespace S {
  export const MaxWidthWrapper = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  `;
}
