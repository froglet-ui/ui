import { render } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { GridItem } from "./GridItem";

describe("GridItem", () => {
  it("renders", () => {
    const { container } = render(<GridItem>content</GridItem>);
    expect(container.firstChild).toBeDefined();
  });

  it("applies className", () => {
    const { container } = render(
      <GridItem className="my-item">content</GridItem>,
    );
    expect(
      (container.firstChild as Element).classList.contains("my-item"),
    ).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<GridItem ref={ref}>content</GridItem>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
