import React from "react";
import { useDynamicTabContext } from "../store/dynamicTabs";

interface DynamicTabContentProps {
  tabName: string;
  children: React.ReactNode;
}

const DynamicTabContent: React.FC<DynamicTabContentProps> = ({
  tabName,
  children,
}) => {
  const [state] = useDynamicTabContext();

  const currentTab = state.tabs.find((tab) => tab.name === tabName);

  if (!currentTab || !currentTab.isActive) {
    return null;
  }

  return <div>{children}</div>;
};

export default DynamicTabContent;
