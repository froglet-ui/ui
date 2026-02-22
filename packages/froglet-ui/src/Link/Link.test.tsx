import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Link } from "./Link";

describe("Link", () => {
  it("renders", () => {
    render(<Link href="https://example.com">Test Link</Link>);
    expect(screen.getByRole("link", { name: "Test Link" })).toBeDefined();
  });

  it("applies className", () => {
    render(
      <Link href="https://example.com" className="link--custom">
        Test Link
      </Link>,
    );
    expect(screen.getByRole("link").classList.contains("link--custom")).toBe(
      true,
    );
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link href="https://example.com" ref={ref}>
        Test Link
      </Link>,
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
