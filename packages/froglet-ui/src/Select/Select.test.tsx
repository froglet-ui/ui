import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  it("renders", () => {
    render(
      <Select>
        <option value="a">Option A</option>
      </Select>,
    );
    expect(screen.getByRole("combobox")).toBeDefined();
  });

  it("applies className", () => {
    render(
      <Select className="select--custom">
        <option value="a">Option A</option>
      </Select>,
    );
    expect(
      screen.getByRole("combobox").classList.contains("select--custom"),
    ).toBe(true);
  });

  it("sets disabled", () => {
    render(
      <Select disabled>
        <option value="a">Option A</option>
      </Select>,
    );
    expect(screen.getByRole("combobox").hasAttribute("disabled")).toBe(true);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLSelectElement>();
    render(
      <Select ref={ref}>
        <option value="a">Option A</option>
      </Select>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
