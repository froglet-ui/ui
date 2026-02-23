import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Box } from "./Box";

describe("Box", () => {
  it("renders", () => {
    render(<Box>Content</Box>);
    expect(screen.getByText("Content")).toBeDefined();
  });

  it("applies className", () => {
    render(<Box className="my-box">Content</Box>);
    expect(screen.getByText("Content").classList.contains("my-box")).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Box ref={ref}>Content</Box>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
