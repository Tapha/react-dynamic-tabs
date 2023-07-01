import React from "react";
import { useDynamicTabContext } from "../store/dynamicTabs";

interface DynamicTabContentProps {
  tabName: string;
  children: React.ReactNode;
  className?: string;
}

const DynamicTabContent: React.FC<DynamicTabContentProps> = ({
  tabName,
  children,
  className = ""
}) => {
  const [state] = useDynamicTabContext();

  const currentTab = state.tabs.find((tab) => tab.name === tabName);

  if (!currentTab || !currentTab.isActive) {
    return null;
  }

  return <div className={className}>{children}</div>;
};

export default DynamicTabContent;
