"use client";

import { Tab, TabList } from "@app/components/tabs";

interface TabButtonsProps {
  selectedRole: number;
  setSelectedRole: (idx: number) => void;
}

export const TabButtons = ({
  selectedRole,
  setSelectedRole,
}: TabButtonsProps) => {
  return (
    <TabList activeTab={selectedRole} onClick={setSelectedRole}>
      <Tab label="Publisher" />
      <Tab label="FrontEnd" />
    </TabList>
  );
};
