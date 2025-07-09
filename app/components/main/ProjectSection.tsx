"use client";

import { Typography } from "@app/styles";
import styled from "@emotion/styled";
import { ProjectLists } from "./ProjectLists";

interface ProjectSectionProps {
  title?: string;
}

export const ProjectSection = ({ title = "Projects" }: ProjectSectionProps) => {
  return (
    <S.ProjectWrapper>
      <S.Title>{title}</S.Title>
      <ProjectLists />
    </S.ProjectWrapper>
  );
};

export namespace S {
  export const ProjectWrapper = styled.section`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  export const Title = styled.h3`
    ${Typography.XXXLarge};
  `;
}
