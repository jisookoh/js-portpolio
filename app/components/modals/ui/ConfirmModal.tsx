import styled from "@emotion/styled";
import { withOverlay } from "./withOverlay";

interface ConfirmModalProps {
  title?: string;
  message?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmModalComponent = ({
  title = "확인",
  message = "정말로 진행하시겠습니까?",
  onConfirm,
  onClose,
}: ConfirmModalProps) => {
  return (
    <S.ModalContainer>
      <S.Title id="confirm-modal-title">{title}</S.Title>
      <S.Message>{message}</S.Message>
      <S.ButtonGroup>
        <S.Button variant="secondary" onClick={onClose}>
          취소
        </S.Button>
        <S.Button
          variant="primary"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          확인
        </S.Button>
      </S.ButtonGroup>
    </S.ModalContainer>
  );
};

export const ConfirmModal = withOverlay(ConfirmModalComponent);

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

  export const ModalContainer = styled.div`
    background: #ffffff;
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  `;

  export const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 16px;
  `;

  export const Message = styled.p`
    font-size: 1rem;
    margin-bottom: 24px;
    color: #333;
  `;

  export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `;

  export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    ${(props) =>
      props.variant === "primary"
        ? `
    background-color: #2563eb;
    color: white;
    &:hover {
      background-color: #1d4ed8;
    }
  `
        : `
    background-color: #e5e7eb;
    color: #111827;
    &:hover {
      background-color: #d1d5db;
    }
  `}
  `;
}
