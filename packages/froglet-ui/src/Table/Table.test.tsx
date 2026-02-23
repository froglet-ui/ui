import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

const columns = [
  { key: "name" as const, label: "Name" },
  { key: "role" as const, label: "Role" },
];

const data = [
  { name: "Alice", role: "Engineer" },
  { name: "Bob", role: "Designer" },
];

describe("Table", () => {
  it("renders", () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Table columns={columns} data={data} className="table--froglet" />);
    const el = screen.getByRole("table");
    expect(el).toHaveClass("table");
    expect(el).toHaveClass("table--froglet");
  });

  it("renders column headers", () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getAllByRole("columnheader")).toHaveLength(columns.length);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLTableElement>();
    render(<Table columns={columns} data={data} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });
});
