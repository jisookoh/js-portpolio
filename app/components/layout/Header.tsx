"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import { Typography } from "@app/styles";

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Logo>JS Portpolio</S.Logo>
      <S.Menus>
        <S.MenusItem href="project">Project</S.MenusItem>
        <S.MenusItem href="about">About me</S.MenusItem>
      </S.Menus>
    </S.HeaderWrapper>
  );
};

namespace S {
  export const HeaderWrapper = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  `;

  export const Logo = styled.h1`
    ${Typography.XLarge};
  `;

  export const Menus = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `;

  export const MenusItem = styled(Link)`
    ${Typography.Small};
  `;
}
