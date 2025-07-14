"use client";

import styled from "@emotion/styled";
import { useRef } from "react";
import { useIntersectionObserver, useModal } from "@app/hooks";

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
      <S.ListOfGalleryItem onClick={onClick}></S.ListOfGalleryItem>
      <S.ListOfGalleryItem></S.ListOfGalleryItem>
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
  `;
}
