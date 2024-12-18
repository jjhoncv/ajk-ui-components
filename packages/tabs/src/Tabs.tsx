import React from "react";
import { TabsProvider } from "./TabsContext";

export interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  children,
  className = "",
}) => {
  return (
    <TabsProvider defaultValue={defaultValue}>
      <div className={className}>{children}</div>
    </TabsProvider>
  );
};
