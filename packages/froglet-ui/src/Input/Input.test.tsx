import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders", () => {
    render(<Input placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toBeDefined();
  });

  it("applies className", () => {
    render(<Input className="input--custom" placeholder="Test" />);
    expect(
      screen.getByPlaceholderText("Test").classList.contains("input--custom"),
    ).toBe(true);
  });

  it("sets disabled", () => {
    render(<Input disabled placeholder="Test" />);
    expect(
      (screen.getByPlaceholderText("Test") as HTMLInputElement).disabled,
    ).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
