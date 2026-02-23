"use client";

import classNames from "classnames";
import "./table.css";

export interface TableColumn<T extends Record<string, unknown>> {
  /** Column key — must be a key of T. */
  key: keyof T & string;
  /** Display label for the column header. Falls back to `key` if omitted. */
  label?: string;
  /** Optional render function for cell content. Defaults to string coercion. */
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T extends Record<string, unknown>> {
  /** Column definitions. Order determines column order. */
  columns: TableColumn<T>[];
  /** Data rows. */
  data: T[];
  /** Table caption for screen readers. Recommended for accessibility. */
  caption?: string;
  /** Additional CSS classes on `<table>`. Use to apply a token block. */
  className?: string;
  /** Forwarded to the `<table>` element. */
  ref?: React.Ref<HTMLTableElement>;
}

/** A brandless data table. All visual styling is driven by CSS custom properties. */
export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  caption,
  className,
  ref,
}: TableProps<T>) => {
  return (
    <table ref={ref} className={classNames("table", className)}>
      {caption && <caption className="table__caption">{caption}</caption>}
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} scope="col" className="table__th">
              {col.label ?? col.key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="table__tr">
            {columns.map((col) => (
              <td key={col.key} className="table__td">
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key] ?? "")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
