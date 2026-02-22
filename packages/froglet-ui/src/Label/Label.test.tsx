import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
  it("renders", () => {
    render(<Label>Email</Label>);
    expect(screen.getByText("Email")).toBeDefined();
  });

  it("applies className", () => {
    render(<Label className="my-label">Email</Label>);
    expect(screen.getByText("Email").classList.contains("my-label")).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLLabelElement>();
    render(<Label ref={ref}>Email</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});
