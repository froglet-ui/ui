"use client";

import React, {
  createContext,
  useContext,
  useId,
  useState,
  cloneElement,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import classNames from "classnames";
import "./tooltip.css";

/*
--------------------------------------------------------------------------------
  Tooltip Context
--------------------------------------------------------------------------------
*/

interface TooltipContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
  uid: string;
}

const TooltipContext = createContext<TooltipContextValue | null>(null);

function useTooltipContext(): TooltipContextValue {
  const ctx = useContext(TooltipContext);
  if (!ctx) {
    throw new Error(
      "TooltipTrigger and TooltipContent must be used within <Tooltip>.",
    );
  }
  return ctx;
}

/*
--------------------------------------------------------------------------------
  Tooltip — root wrapper, provides positioning context
--------------------------------------------------------------------------------
*/

export interface TooltipProps {
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Additional CSS classes applied to the <span> wrapper. */
  className?: string;
  /** Child content — TooltipTrigger and TooltipContent. */
  children?: ReactNode;
  /** Forwarded to the underlying <span> element. */
  ref?: React.Ref<HTMLSpanElement>;
}

export const Tooltip = ({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  className,
  children,
  ref,
}: TooltipProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen ?? internalOpen;
  const uid = useId();

  const setOpen = (v: boolean) => {
    setInternalOpen(v);
    onOpenChange?.(v);
  };

  return (
    <TooltipContext.Provider value={{ open, setOpen, uid }}>
      <span ref={ref} className={classNames("tooltip", className)}>
        {children}
      </span>
    </TooltipContext.Provider>
  );
};

/*
--------------------------------------------------------------------------------
  TooltipTrigger — cloneElement, no DOM wrapper
--------------------------------------------------------------------------------
*/

export interface TooltipTriggerProps {
  /** A single React element whose mouse/focus events are augmented. */
  children: ReactElement;
}

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  const { setOpen, uid } = useTooltipContext();

  return cloneElement(children as ReactElement<Record<string, unknown>>, {
    "aria-describedby": uid,
    onMouseEnter: (e: React.MouseEvent) => {
      setOpen(true);
      (
        children.props as Record<string, unknown> & {
          onMouseEnter?: (e: React.MouseEvent) => void;
        }
      ).onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      setOpen(false);
      (
        children.props as Record<string, unknown> & {
          onMouseLeave?: (e: React.MouseEvent) => void;
        }
      ).onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      setOpen(true);
      (
        children.props as Record<string, unknown> & {
          onFocus?: (e: React.FocusEvent) => void;
        }
      ).onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      setOpen(false);
      (
        children.props as Record<string, unknown> & {
          onBlur?: (e: React.FocusEvent) => void;
        }
      ).onBlur?.(e);
    },
  });
};

/*
--------------------------------------------------------------------------------
  TooltipContent — the tooltip bubble
--------------------------------------------------------------------------------
*/

export interface TooltipContentProps extends HTMLAttributes<HTMLSpanElement> {
  /** Placement of the tooltip relative to the trigger. */
  side?: "top" | "bottom" | "left" | "right";
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Tooltip text. */
  children?: ReactNode;
  /** Forwarded to the underlying <span> element. */
  ref?: React.Ref<HTMLSpanElement>;
}

export const TooltipContent = ({
  side = "top",
  className,
  children,
  ref,
  ...props
}: TooltipContentProps) => {
  const { open, uid } = useTooltipContext();

  return (
    <span
      id={uid}
      role="tooltip"
      aria-hidden={!open}
      data-side={side}
      className={classNames("tooltip__content", className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
};
