import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const renderTooltip = () =>
  render(
    <Tooltip>
      <TooltipTrigger>
        <button type="button">Hover me</button>
      </TooltipTrigger>
      <TooltipContent>Tooltip text</TooltipContent>
    </Tooltip>,
  );

describe("Tooltip", () => {
  it("renders", () => {
    renderTooltip();
    // aria-hidden="true" initially — use { hidden: true } to find the element
    expect(screen.getByRole("tooltip", { hidden: true })).toBeDefined();
  });

  it("applies className", () => {
    const { container } = render(
      <Tooltip className="tooltip--froglet">
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Text</TooltipContent>
      </Tooltip>,
    );
    const root = container.querySelector(".tooltip");
    expect(root).toHaveClass("tooltip");
    expect(root).toHaveClass("tooltip--froglet");
  });

  it("shows on mouseenter", () => {
    renderTooltip();
    fireEvent.mouseEnter(screen.getByRole("button", { name: "Hover me" }));
    // aria-hidden="false" — element is now accessible
    expect(screen.getByRole("tooltip")).toHaveAttribute("aria-hidden", "false");
  });

  it("hides on mouseleave", () => {
    renderTooltip();
    const trigger = screen.getByRole("button", { name: "Hover me" });
    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);
    // aria-hidden="true" again — use { hidden: true }
    expect(screen.getByRole("tooltip", { hidden: true })).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("shows on focus", () => {
    renderTooltip();
    fireEvent.focus(screen.getByRole("button", { name: "Hover me" }));
    expect(screen.getByRole("tooltip")).toHaveAttribute("aria-hidden", "false");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLSpanElement>();
    render(
      <Tooltip ref={ref}>
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Text</TooltipContent>
      </Tooltip>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
