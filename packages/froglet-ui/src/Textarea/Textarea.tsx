"use client";

// Library Imports
import { TextareaHTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./textarea.css";

/**
 * An interface describing the Textarea props.
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Additional CSS classes to apply to the textarea element.
   */
  className?: string;
}

/**
 * The Textarea Component
 *
 * @param props - All standard textarea attributes, plus className.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --textarea-background-color
 * --textarea-text-color
 * --textarea-font-size
 * --textarea-line-height
 * --textarea-padding
 * --textarea-border-color
 * --textarea-border-width
 * --textarea-border-radius
 * --textarea-background-color-hover
 * --textarea-border-color-hover
 * --textarea-background-color-disabled
 * --textarea-text-color-disabled
 * --textarea-border-color-disabled
 * --textarea-border-color-focus
 * --textarea-box-shadow-focus
 * ```
 *
 * @returns A styled textarea element with scoped CSS Custom Properties.
 */
export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={classNames("textarea", className)} {...props} />;
};
