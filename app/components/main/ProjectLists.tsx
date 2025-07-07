"use client";

import styled from "@emotion/styled";
import { useRef } from "react";
import { Colors } from "@app/styles";
import { useIntersectionObserver } from "@app/hooks";

export const ProjectLists = () => {
  const sectionRef = useRef<HTMLUListElement>(null);

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

  return (
    <S.ListOfGallery ref={sectionRef}>
      <S.ListOfGalleryItem></S.ListOfGalleryItem>
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
    gap: 40px;
    flex-wrap: wrap;
  `;

  export const ListOfGalleryItem = styled.li`
    width: calc(50% - 20px);
    height: 400px;
    background-color: ${Colors.Black};
  `;
}
