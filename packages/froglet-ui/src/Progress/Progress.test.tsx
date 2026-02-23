import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders", () => {
    render(<Progress value={0.5} max={1} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Progress className="progress--primary" value={0.5} max={1} />);
    expect(screen.getByRole("progressbar")).toHaveClass("progress");
    expect(screen.getByRole("progressbar")).toHaveClass("progress--primary");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLProgressElement>();
    render(<Progress ref={ref} value={0.5} max={1} />);
    expect(ref.current).toBeInstanceOf(HTMLProgressElement);
  });

  it("renders with value attribute", () => {
    render(<Progress value={0.75} max={1} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("value", "0.75");
  });
});
