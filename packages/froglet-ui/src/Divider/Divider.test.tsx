import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toBeDefined();
  });

  it("applies className", () => {
    render(<Divider className="my-divider" />);
    expect(screen.getByRole("separator").classList.contains("my-divider")).toBe(
      true,
    );
  });

  it("adds vertical class when orientation is vertical", () => {
    render(<Divider orientation="vertical" />);
    expect(
      screen.getByRole("separator").classList.contains("divider--vertical"),
    ).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLHRElement>();
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLHRElement);
  });
});
