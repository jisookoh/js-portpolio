import styled from "@emotion/styled";
import { ComponentType, PropsWithChildren } from "react";

export const withOverlay =
  <T extends {}>(WrappedComponent: ComponentType<T>) =>
  (props: PropsWithChildren<T>) => {
    return (
      <S.Overlay role="dialog" aria-modal="true">
        <WrappedComponent {...props} />
      </S.Overlay>
    );
  };

export namespace S {
  export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
}
