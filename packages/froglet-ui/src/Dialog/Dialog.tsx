"use client";

import React, {
  createContext,
  useContext,
  useId,
  useState,
  useRef,
  useEffect,
  cloneElement,
  HTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import classNames from "classnames";
import "./dialog.css";

/*
--------------------------------------------------------------------------------
  Dialog Context
--------------------------------------------------------------------------------
*/

interface DialogContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
  uid: string;
}

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext(): DialogContextValue {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error(
      "DialogTrigger, DialogContent, and DialogClose must be used within <Dialog>.",
    );
  }
  return ctx;
}

/*
--------------------------------------------------------------------------------
  Dialog — context provider, renders no DOM element
--------------------------------------------------------------------------------
*/

export interface DialogProps {
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Child content — typically DialogTrigger and DialogContent. */
  children?: ReactNode;
}

export const Dialog = ({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  children,
}: DialogProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen ?? internalOpen;
  const uid = useId();

  const setOpen = (v: boolean) => {
    setInternalOpen(v);
    onOpenChange?.(v);
  };

  return (
    <DialogContext.Provider value={{ open, setOpen, uid }}>
      {children}
    </DialogContext.Provider>
  );
};

/*
--------------------------------------------------------------------------------
  DialogTrigger — button that opens the dialog
--------------------------------------------------------------------------------
*/

export interface DialogTriggerProps {
  /** A single React element whose click event is augmented to open the dialog. */
  children: ReactElement;
}

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
  const { setOpen } = useDialogContext();

  return cloneElement(children as ReactElement<Record<string, unknown>>, {
    onClick: (e: React.MouseEvent) => {
      setOpen(true);
      (
        children.props as Record<string, unknown> & {
          onClick?: (e: React.MouseEvent) => void;
        }
      ).onClick?.(e);
    },
  });
};

/*
--------------------------------------------------------------------------------
  DialogContent — the native <dialog> element
--------------------------------------------------------------------------------
*/

export interface DialogContentProps extends HTMLAttributes<HTMLDialogElement> {
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Dialog panel content. */
  children?: ReactNode;
  /** Forwarded to the underlying <dialog> element. */
  ref?: React.Ref<HTMLDialogElement>;
}

export const DialogContent = ({
  className,
  children,
  ref: externalRef,
  ...props
}: DialogContentProps) => {
  const { open, setOpen } = useDialogContext();
  const internalRef = useRef<HTMLDialogElement>(null);

  // Merge internal ref with external consumer ref.
  const setRef = (node: HTMLDialogElement | null) => {
    (internalRef as React.MutableRefObject<HTMLDialogElement | null>).current =
      node;
    if (typeof externalRef === "function") {
      externalRef(node);
    } else if (externalRef && "current" in externalRef) {
      (
        externalRef as React.MutableRefObject<HTMLDialogElement | null>
      ).current = node;
    }
  };

  // Sync open state → showModal() / close().
  useEffect(() => {
    const el = internalRef.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  // Listen to native close event (fired when user presses Escape).
  useEffect(() => {
    const el = internalRef.current;
    if (!el) return;
    const handleClose = () => setOpen(false);
    el.addEventListener("close", handleClose);
    return () => el.removeEventListener("close", handleClose);
  }, [setOpen]);

  return (
    <dialog ref={setRef} className={classNames("dialog", className)} {...props}>
      {children}
    </dialog>
  );
};

/*
--------------------------------------------------------------------------------
  DialogClose — button that closes the dialog
--------------------------------------------------------------------------------
*/

export interface DialogCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Close button content. */
  children?: ReactNode;
  /** Forwarded to the underlying <button> element. */
  ref?: React.Ref<HTMLButtonElement>;
}

export const DialogClose = ({
  className,
  children,
  ref,
  onClick,
  ...props
}: DialogCloseProps) => {
  const { setOpen } = useDialogContext();

  return (
    <button
      type="button"
      className={classNames("dialog__close", className)}
      onClick={(e) => {
        setOpen(false);
        onClick?.(e);
      }}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};
