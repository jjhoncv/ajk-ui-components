import React, { HTMLProps } from "react";
import { useTabsContext } from "./TabsContext";
import { cn } from "@ajk-ui/core";

export interface TabsContentProps extends HTMLProps<HTMLButtonElement> {
  value: string;
  currentValue: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContent: React.FC<Omit<TabsContentProps, "currentValue">> = ({
  value,
  children,
  className,
  ...props
}) => {
  const { value: currentValue } = useTabsContext();

  if (value !== currentValue) return null;

  return <div className={cn("py-6", className)}>{children}</div>;
};
