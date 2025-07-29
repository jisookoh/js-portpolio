import Image from "next/image";
import styled from "@emotion/styled";
import { withOverlay } from "./withOverlay";
import { Colors, Typography } from "@app/styles";
import { Icon } from "@app/icons";

interface InformationModalProps {
  title?: string;
  onClose: () => void;
}

const InformationModalComponent = ({
  title = "제목",
  onClose,
}: InformationModalProps) => {
  return (
    <S.ModalContainer>
      <S.ModalHeader>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.ButtonWrapper>
          <S.Button title="전체화면">
            <Icon name="expand" />
          </S.Button>
          <S.Button title="닫기" onClick={onClose}>
            <Icon name="close" />
          </S.Button>
        </S.ButtonWrapper>
      </S.ModalHeader>

      <S.ModalContents>
        <S.ContentTitle>웨어러블 데이터와 앱 연동</S.ContentTitle>
        <S.Images
          src={"/images/munchskill_main.png"}
          alt="먼치스킬 메인 대시보드"
          width={1080}
          height={525}
        />
        <S.ContentDesc>
          내용 추가
          <br />
          내용 추가
          <br />
          내용 추가
          <br />
          내용 추가
          <br />
          내용 추가
          <br />
          내용 추가
          <br />
          내용 추가
          <br />
          내용 추가
          <br />
          내용 추가
          <br />
        </S.ContentDesc>
      </S.ModalContents>
    </S.ModalContainer>
  );
};

export const InformationModal = withOverlay(InformationModalComponent);

export namespace S {
  const headerHeight = 40;

  export const ModalContainer = styled.div`
    background-color: ${Colors.White};
    max-width: 800px;
    width: 100%;
    height: 80%;
    overflow-y: auto;
    border-radius: 8px;
    position: relative;
  `;

  export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${headerHeight}px;
    border-bottom: 1px solid ${Colors.Gray200};
    width: 100%;
    padding-left: 20px;
    padding-right: 10px;
  `;

  export const HeaderTitle = styled.h6`
    ${Typography.XXSmall};
    color: ${Colors.Gray500};
  `;

  export const ButtonWrapper = styled.div`
    font-size: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  export const Button = styled.button`
    width: 24px;
    height: 24px;
  `;

  export const ModalContents = styled.div`
    height: calc(100% - ${headerHeight}px);
    overflow-y: auto;
    padding: 20px;
    background-color: ${Colors.Gray100};
    display: flex;
    flex-direction: column;
    gap: 16px;
  `;

  export const ContentTitle = styled.h6`
    ${Typography.XSmall};
    color: ${Colors.DefaultTextColor};
  `;

  export const Images = styled(Image)`
    width: 100%;
    height: auto;
  `;

  export const ContentDesc = styled.p`
    ${Typography.XXXSmall};
    color: ${Colors.Gray700};
  `;
}
