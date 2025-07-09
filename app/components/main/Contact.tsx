"use client";

import styled from "@emotion/styled";
import { Icon } from "@app/icons";

export const Contact = () => {
  return (
    <S.ContactWrapper>
      <Icon name="envelope" />
      <Icon name="phone" />
      <Icon name="robot" />
      <Icon name="blog" />
    </S.ContactWrapper>
  );
};

export namespace S {
  export const ContactWrapper = styled.article`
    display: flex;
    align-items: center;
    gap: 4px;
  `;
}
