import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders", () => {
    render(<Radio name="test" value="a" />);
    expect(screen.getByRole("radio")).toBeDefined();
  });

  it("applies className", () => {
    render(<Radio name="test" value="a" className="radio--custom" />);
    expect(screen.getByRole("radio").classList.contains("radio--custom")).toBe(
      true,
    );
  });

  it("sets disabled", () => {
    render(<Radio name="test" value="a" disabled />);
    expect(screen.getByRole("radio").hasAttribute("disabled")).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Radio name="test" value="a" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
