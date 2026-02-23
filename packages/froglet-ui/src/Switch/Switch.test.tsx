import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders", () => {
    render(<Switch onChange={() => {}} />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Switch className="switch--primary" onChange={() => {}} />);
    const el = screen.getByRole("switch");
    expect(el).toHaveClass("input--switch");
    expect(el).toHaveClass("switch--primary");
  });

  it("sets disabled", () => {
    render(<Switch disabled onChange={() => {}} />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Switch ref={ref} onChange={() => {}} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
