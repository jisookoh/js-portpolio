"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useIntersectionObserver, useModal } from "@app/hooks";
import { Colors, Typography } from "@app/styles";

export const ProjectLists = () => {
  const sectionRef = useRef<HTMLUListElement>(null);
  const { openModal, closeModal } = useModal();

  useIntersectionObserver({
    targetRef: sectionRef,
    onIntersect: (entry) => {
      console.log(entry);
    },
    options: {
      threshold: 0.4,
    },
    once: false,
  });

  const onClick = () => {
    openModal("confirm", {
      onConfirm: () => console.log("확인"),
      onClose: (id: string) => closeModal(id),
    });
  };

  return (
    <S.ListOfGallery ref={sectionRef}>
      <S.ListOfGalleryItem onClick={onClick}>
        <Image
          src={"/images/munchskill_main.png"}
          alt="먼치스킬 메인 대시보드"
          width={1080}
          height={525}
          priority
        />
        <S.ProjectTextBox>
          <S.ProjectTitle>퓨어윗미</S.ProjectTitle>
          <S.ProjectDesc>
            만성 질환 예방 및 개선 맞춤형 헬스케어 플랫폼 개발 ...
          </S.ProjectDesc>
        </S.ProjectTextBox>
      </S.ListOfGalleryItem>
      <S.ListOfGalleryItem onClick={onClick}>
        <Image
          src={"/images/munchskill_main.png"}
          alt="먼치스킬 메인 대시보드"
          width={1080}
          height={525}
          priority
        />
        <S.ProjectTextBox>
          <S.ProjectTitle>Munchskill</S.ProjectTitle>
          <S.ProjectDesc>직무역량인적성평가 시스템으로 ...</S.ProjectDesc>
        </S.ProjectTextBox>
      </S.ListOfGalleryItem>
      <S.ListOfGalleryItem></S.ListOfGalleryItem>
      <S.ListOfGalleryItem></S.ListOfGalleryItem>
    </S.ListOfGallery>
  );
};

namespace S {
  export const HomeContainer = styled.div``;

  export const ListOfGallery = styled.ul`
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  `;

  export const ListOfGalleryItem = styled.li`
    width: calc(50% - 16px);
    height: 400px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;

    & img {
      transition: all 1s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
      backdrop-filter: blur(5px);
    }

    &:hover {
      img {
        transform: scale(110%);
      }
    }
  `;

  export const ProjectTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;
    width: 100%;
    z-index: 2;
  `;

  export const ProjectTitle = styled.h4`
    ${Typography.Large};
    color: ${Colors.White};
  `;

  export const ProjectDesc = styled.p`
    ${Typography.Small};
    color: ${Colors.White};
  `;
}
