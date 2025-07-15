import styled from "@emotion/styled";
import { Children, cloneElement, isValidElement } from "react";

interface TabListProps {
  children: React.ReactNode;
  activeTab: number;
  onClick: (idx: number) => void;
}

export const TabList = ({ children, activeTab, onClick }: TabListProps) => (
  <S.TabWrapper role="tablist">
    {Children.map(children, (child, idx) => {
      if (isValidElement(child)) {
        const tabProps = {
          isActive: idx === activeTab,
          onClick: () => onClick(idx),
        };
        return cloneElement(child, tabProps);
      }
      return null;
    })}
  </S.TabWrapper>
);

namespace S {
  export const TabWrapper = styled.ul`
    display: flex;
  `;
}
