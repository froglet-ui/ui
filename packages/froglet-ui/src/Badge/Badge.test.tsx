import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeDefined();
  });

  it("applies className", () => {
    render(<Badge className="my-badge">New</Badge>);
    expect(screen.getByText("New").classList.contains("my-badge")).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>New</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
