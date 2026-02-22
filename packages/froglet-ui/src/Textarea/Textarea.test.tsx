import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders", () => {
    render(<Textarea placeholder="Enter text" />);
    expect(screen.getByRole("textbox")).toBeDefined();
  });

  it("applies className", () => {
    render(<Textarea className="textarea--custom" />);
    expect(
      screen.getByRole("textbox").classList.contains("textarea--custom"),
    ).toBe(true);
  });

  it("sets disabled", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox").hasAttribute("disabled")).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
