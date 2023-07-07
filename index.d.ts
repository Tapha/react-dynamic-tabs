import React from 'react';

// Types for DynamicTab
interface DynamicTabProps {
  tag?: keyof JSX.IntrinsicElements;
  tabName: string;
  className?: string;
}
export const DynamicTab: React.FC<DynamicTabProps>;

// Types for DynamicTabContent
interface DynamicTabContentProps {
  tabName: string;
  children: React.ReactNode;
  className?: string;
}
export const DynamicTabContent: React.FC<DynamicTabContentProps>;

// Types for DynamicTabSettings
interface Options {
  useUrlFragment: boolean;
  defaultTabHash: string | null;
}
interface DynamicTabSettingsProps {
  options?: Options;
}
export const DynamicTabSettings: React.FC<DynamicTabSettingsProps>;

// Types for DynamicTabProvider
interface Tab {
  hash: string;
  name: string;
  isActive: boolean;
  isDisabled: boolean;
  computedId: string;
}

interface State {
  useUrlFragment: boolean;
  defaultTabHash: string | null;
  activeTabHash: string;
  lastActiveTabHash: string;
  cacheLifetime: number;
  storageKey: string;
  tabs: Tab[];
}

interface DynamicTabProviderProps {
  children: React.ReactNode;
}
export const DynamicTabProvider: React.FC<DynamicTabProviderProps>;

// Type for useDynamicTabContext
export function useDynamicTabContext(): [State, React.Dispatch<any>];
