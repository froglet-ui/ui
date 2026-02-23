# Table

A brandless data table wrapping native `<table>`, `<thead>`, and `<tbody>` elements. Accepts typed column definitions and data rows. All visual styling is driven by CSS custom properties.

## Usage

```tsx
import { Table } from "@froglet/ui";
import type { TableColumn } from "@froglet/ui";

type Row = { name: string; role: string; status: string };

const columns: TableColumn<Row>[] = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const data: Row[] = [
  { name: "Alice Martin", role: "Engineer", status: "Active" },
  { name: "Bob Chen", role: "Designer", status: "Active" },
];

function Example() {
  return <Table columns={columns} data={data} caption="Team members" />;
}
```

### Themed

```tsx
<Table
  className="table--froglet"
  columns={columns}
  data={data}
  caption="Team members"
/>
```

### Custom cell render

```tsx
const columns: TableColumn<Row>[] = [
  { key: "name", label: "Name" },
  {
    key: "status",
    label: "Status",
    render: (value) => <strong>{String(value)}</strong>,
  },
];
```

## Props

### `TableProps<T>`

| Prop        | Type                          | Default | Description                                         |
| ----------- | ----------------------------- | ------- | --------------------------------------------------- |
| `columns`   | `TableColumn<T>[]`            | —       | Column definitions. Order determines column order.  |
| `data`      | `T[]`                         | —       | Data rows.                                          |
| `caption`   | `string`                      | —       | Table caption. Recommended for screen readers.      |
| `className` | `string`                      | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLTableElement>` | —       | Forwarded to the underlying `<table>` element.      |

### `TableColumn<T>`

| Prop     | Type                                             | Default | Description                                                |
| -------- | ------------------------------------------------ | ------- | ---------------------------------------------------------- |
| `key`    | `keyof T & string`                               | —       | Column key. Must match a property key of `T`.              |
| `label`  | `string`                                         | `key`   | Column header text. Falls back to `key` if omitted.        |
| `render` | `(value: T[keyof T], row: T) => React.ReactNode` | —       | Optional cell renderer. Defaults to `String(value ?? "")`. |

## CSS Custom Properties

| Token                              | Default        | Description                                      |
| ---------------------------------- | -------------- | ------------------------------------------------ |
| `--table-width`                    | `100%`         | Table width.                                     |
| `--table-border-collapse`          | `collapse`     | Border collapse mode.                            |
| `--table-font-size`                | `1rem`         | Base font size.                                  |
| `--table-border-width`             | `0`            | Outer table border width.                        |
| `--table-border-style`             | `solid`        | Shared border style (used by outer, th, and td). |
| `--table-border-color`             | —              | Outer border color. No border when unset.        |
| `--table-border-radius`            | `0`            | Outer border radius.                             |
| `--table-background-color`         | —              | Table background.                                |
| `--table-caption-font-size`        | `0.875rem`     | Caption font size.                               |
| `--table-caption-text-color`       | —              | Caption text color.                              |
| `--table-caption-padding-bottom`   | `0.5rem`       | Gap between caption and table.                   |
| `--table-th-padding`               | `0.75rem 1rem` | Header cell padding.                             |
| `--table-th-text-align`            | `left`         | Header cell alignment.                           |
| `--table-th-font-weight`           | `600`          | Header cell font weight.                         |
| `--table-th-background-color`      | —              | Header cell background.                          |
| `--table-th-text-color`            | —              | Header cell text color.                          |
| `--table-th-border-bottom-width`   | `2px`          | Header cell bottom border width.                 |
| `--table-th-border-bottom-color`   | `currentColor` | Header cell bottom border color.                 |
| `--table-tr-background-color-even` | —              | Even row background (striping).                  |
| `--table-tr-background-color-odd`  | —              | Odd row background (striping).                   |
| `--table-td-padding`               | `0.75rem 1rem` | Body cell padding.                               |
| `--table-td-text-color`            | —              | Body cell text color.                            |
| `--table-td-border-bottom-width`   | `1px`          | Body cell bottom border width.                   |
| `--table-td-border-bottom-color`   | `currentColor` | Body cell bottom border color.                   |

### Notes

- `--table-border-style` is shared across outer border, header bottom border, and body cell bottom border.
- Row striping uses `:nth-child(even)` and `:nth-child(odd)` on `.table__tr`. Both tokens are bare vars with no fallback, so no stripe is applied when unset.
- To get outer `border-radius` working visually, set `--table-border-collapse: separate` alongside `border-spacing: 0` and `overflow: hidden` in your theme class.

## Variants

Apply a modifier class that sets CSS custom properties:

```css
.table--froglet {
  --table-th-background-color: #f9fafb;
  --table-th-text-color: #111827;
  --table-th-border-bottom-width: 2px;
  --table-th-border-bottom-color: #d1d5db;
  --table-tr-background-color-even: #f9fafb;
  --table-tr-background-color-odd: #ffffff;
  --table-td-text-color: #111827;
  --table-td-border-bottom-width: 1px;
  --table-td-border-bottom-color: #d1d5db;
  --table-caption-text-color: #6b7280;
}
```

## Accessibility

- `<caption>` provides a table title for screen readers. Strongly recommended when multiple tables are on the same page.
- Each `<th>` has `scope="col"` so screen readers associate headers with their columns.
- Row keys default to `rowIndex`. If your data has a stable unique identifier, consider passing it via a `render` function or wrapping the table to add `data-*` attributes.
