import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders", () => {
    render(<Checkbox onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Checkbox className="checkbox--primary" onChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("input--checkbox");
    expect(checkbox).toHaveClass("checkbox--primary");
  });

  it("sets disabled", () => {
    render(<Checkbox disabled onChange={() => {}} />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} onChange={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
