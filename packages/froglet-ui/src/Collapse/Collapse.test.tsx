import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Collapse } from "./Collapse";
import { CollapseSummary } from "./CollapseSummary";

describe("Collapse", () => {
  it("renders", () => {
    render(
      <Collapse>
        <CollapseSummary>Toggle</CollapseSummary>
      </Collapse>,
    );
    expect(screen.getByText("Toggle")).toBeDefined();
  });

  it("applies className", () => {
    const { container } = render(
      <Collapse className="my-collapse">
        <CollapseSummary>Toggle</CollapseSummary>
      </Collapse>,
    );
    expect(
      container.querySelector("details")?.classList.contains("my-collapse"),
    ).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDetailsElement>();
    render(
      <Collapse ref={ref}>
        <CollapseSummary>Toggle</CollapseSummary>
      </Collapse>,
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

describe("CollapseSummary", () => {
  it("renders", () => {
    render(<CollapseSummary>Toggle</CollapseSummary>);
    expect(screen.getByText("Toggle")).toBeDefined();
  });

  it("applies className", () => {
    render(<CollapseSummary className="my-summary">Toggle</CollapseSummary>);
    expect(screen.getByText("Toggle").classList.contains("my-summary")).toBe(
      true,
    );
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLElement>();
    render(<CollapseSummary ref={ref}>Toggle</CollapseSummary>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
