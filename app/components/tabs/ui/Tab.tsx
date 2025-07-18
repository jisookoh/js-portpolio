import styled from "@emotion/styled";
import { Colors, Typography } from "@app/styles";

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const Tab = ({ label, isActive, onClick }: TabProps) => (
  <S.TabList onClick={onClick} isActive={isActive}>
    {label}
  </S.TabList>
);

namespace S {
  export const TabList = styled.li<{ isActive?: boolean }>`
    padding: 12px 32px;
    ${Typography.XSmall};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;

    ${({ isActive }) =>
      isActive
        ? `
            color: ${Colors.White};
            background-color: ${Colors.Black};
          `
        : `
            &:hover {
              color: ${Colors.Gray300};
            }
        `}
  `;
}
