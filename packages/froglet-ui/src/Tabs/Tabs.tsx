"use client";

import React, {
  createContext,
  useContext,
  useId,
  useState,
  HTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";
import "./tabs.css";

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TabsContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
  uid: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tab, TabList, and TabPanel must be used within <Tabs>.");
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------

export interface TabsProps {
  /** Uncontrolled initial active tab value. */
  defaultValue?: string;
  /** Controlled active tab value. */
  value?: string;
  /** Called when the active tab changes. */
  onValueChange?: (value: string) => void;
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Child content — typically a TabList followed by TabPanels. */
  children?: ReactNode;
  /** Forwarded to the underlying `<div>` element. */
  ref?: React.Ref<HTMLDivElement>;
}

/** Root container for the Tabs compound component. Manages active-tab state via context. */
export const Tabs = ({
  defaultValue = "",
  value,
  onValueChange,
  className,
  children,
  ref,
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeValue = value ?? internalValue;
  const uid = useId();

  const setActiveValue = (v: string) => {
    setInternalValue(v);
    onValueChange?.(v);
  };

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue, uid }}>
      <div ref={ref} className={classNames("tabs", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// ---------------------------------------------------------------------------
// TabList
// ---------------------------------------------------------------------------

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Tab buttons. */
  children?: ReactNode;
  /** Forwarded to the underlying `<div>` element. */
  ref?: React.Ref<HTMLDivElement>;
}

/** Wraps the set of tab triggers. Provides ARIA `tablist` role and keyboard navigation. */
export const TabList = ({
  className,
  children,
  ref,
  onKeyDown,
  ...props
}: TabListProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]:not(:disabled)',
      ),
    );
    const activeIndex = tabs.findIndex(
      (tab) => tab.getAttribute("aria-selected") === "true",
    );

    if (e.key === "ArrowRight") {
      const next = (activeIndex + 1) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      const prev = (activeIndex - 1 + tabs.length) % tabs.length;
      tabs[prev].focus();
      tabs[prev].click();
      e.preventDefault();
    } else if (e.key === "Home") {
      tabs[0].focus();
      tabs[0].click();
      e.preventDefault();
    } else if (e.key === "End") {
      tabs[tabs.length - 1].focus();
      tabs[tabs.length - 1].click();
      e.preventDefault();
    } else {
      onKeyDown?.(e);
    }
  };

  return (
    <div
      role="tablist"
      className={classNames("tabs__list", className)}
      onKeyDown={handleKeyDown}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Tab
// ---------------------------------------------------------------------------

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Value identifying this tab. Must match a corresponding TabPanel value. */
  value: string;
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Tab label content. */
  children?: ReactNode;
  /** Forwarded to the underlying `<button>` element. */
  ref?: React.Ref<HTMLButtonElement>;
}

/** A single tab trigger. Must be placed inside a TabList. */
export const Tab = ({
  value,
  className,
  children,
  ref,
  onClick,
  ...props
}: TabProps) => {
  const { activeValue, setActiveValue, uid } = useTabsContext();
  const isSelected = activeValue === value;

  return (
    <button
      role="tab"
      id={`${uid}-tab-${value}`}
      aria-selected={isSelected}
      aria-controls={`${uid}-panel-${value}`}
      tabIndex={isSelected ? 0 : -1}
      className={classNames("tabs__tab", className)}
      onClick={(e) => {
        setActiveValue(value);
        onClick?.(e);
      }}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

// ---------------------------------------------------------------------------
// TabPanel
// ---------------------------------------------------------------------------

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Value identifying this panel. Must match a corresponding Tab value. */
  value: string;
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Panel content. */
  children?: ReactNode;
  /** Forwarded to the underlying `<div>` element. */
  ref?: React.Ref<HTMLDivElement>;
}

/** A tab panel. Shown when its value matches the active tab; hidden otherwise. */
export const TabPanel = ({
  value,
  className,
  children,
  ref,
  ...props
}: TabPanelProps) => {
  const { activeValue, uid } = useTabsContext();

  return (
    <div
      role="tabpanel"
      id={`${uid}-panel-${value}`}
      aria-labelledby={`${uid}-tab-${value}`}
      hidden={activeValue !== value}
      className={classNames("tabs__panel", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
