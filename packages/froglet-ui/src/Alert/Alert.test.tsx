import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders", () => {
    render(<Alert>Something went wrong.</Alert>);
    expect(screen.getByText("Something went wrong.")).toBeDefined();
  });

  it("applies className", () => {
    render(<Alert className="my-alert">Message</Alert>);
    expect(screen.getByRole("alert").classList.contains("my-alert")).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Alert ref={ref}>Message</Alert>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("has role alert by default", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole("alert")).toBeDefined();
  });
});
