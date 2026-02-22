import { render } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { GridContainer } from "./GridContainer";

describe("GridContainer", () => {
  it("renders", () => {
    const { container } = render(<GridContainer>content</GridContainer>);
    expect(container.firstChild).toBeDefined();
  });

  it("applies className", () => {
    const { container } = render(
      <GridContainer className="my-grid">content</GridContainer>,
    );
    expect(
      (container.firstChild as Element).classList.contains("my-grid"),
    ).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<GridContainer ref={ref}>content</GridContainer>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
