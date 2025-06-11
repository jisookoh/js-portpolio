"use client";

import styled from "@emotion/styled";
import { PrimaryLayout } from "@app/components/layout";
import { Colors } from "@app/styles";
import {
  useDynamicRefs,
  useElementOffsets,
  useParallaxScroll,
} from "@app/hooks";

export default function Home() {
  const { getRef, getAllRefs } = useDynamicRefs<HTMLLIElement>();

  const offsetCount = useElementOffsets(getAllRefs()).length;
  const translateYValues = useParallaxScroll(offsetCount);

  return (
    <PrimaryLayout>
      <S.ListOfGallery>
        <S.ListOfGalleryItem
          ref={getRef("section1")}
          style={{ transform: `translateY(-${translateYValues[0]}px)` }}
        ></S.ListOfGalleryItem>
        <S.ListOfGalleryItem
          ref={getRef("section2")}
          style={{ transform: `translateY(-${translateYValues[1]}px)` }}
        ></S.ListOfGalleryItem>
        <S.ListOfGalleryItem
          ref={getRef("section3")}
          style={{ transform: `translateY(-${translateYValues[2]}px)` }}
        ></S.ListOfGalleryItem>
        <S.ListOfGalleryItem
          ref={getRef("section4")}
          style={{ transform: `translateY(-${translateYValues[3]}px)` }}
        ></S.ListOfGalleryItem>
      </S.ListOfGallery>
    </PrimaryLayout>
  );
}

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
