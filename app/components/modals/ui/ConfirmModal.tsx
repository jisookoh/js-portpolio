import styled from "@emotion/styled";
import { withOverlay } from "./withOverlay";
import { Colors, Typography } from "@app/styles";

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
  export const ModalContainer = styled.div`
    background: ${Colors.White};
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  `;

  export const Title = styled.h2`
    ${Typography.Medium};
  `;

  export const Message = styled.p`
    ${Typography.Small};
  `;

  export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  `;

  export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
    padding: 8px 16px;
    border-radius: 4px;
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
