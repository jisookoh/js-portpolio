"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import { Typography } from "@app/styles";
import { ProjectLists } from "./ProjectLists";
import { TabButtons } from "./TabButtons";

interface ProjectSectionProps {
  title?: string;
}

export const ProjectSection = ({ title = "Projects" }: ProjectSectionProps) => {
  const [selectedRole, setSelectedRole] = useState<number>(0);

  return (
    <S.ProjectWrapper>
      <S.Title>{title}</S.Title>
      <TabButtons
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
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
