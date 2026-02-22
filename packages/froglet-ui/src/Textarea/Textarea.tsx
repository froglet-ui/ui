"use client";

import { TextareaHTMLAttributes } from "react";
import classNames from "classnames";
import "./textarea.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Forwarded to the underlying `<textarea>` element. */
  ref?: React.Ref<HTMLTextAreaElement>;
}

/** A brandless textarea. All visual styling is driven by CSS custom properties. */
export const Textarea = ({ className, ref, ...props }: TextareaProps) => {
  return (
    <textarea
      ref={ref}
      className={classNames("textarea", className)}
      {...props}
    />
  );
};
