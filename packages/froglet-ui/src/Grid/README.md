# Grid

A brandless CSS Grid layout system. `GridContainer` establishes the grid; `GridItem` places content within it. All layout behavior is driven by CSS custom properties.

## Usage

```tsx
import { GridContainer, GridItem } from "@froglet/ui";

<GridContainer columns={12} gap="1rem">
  <GridItem columnSpan={12}>Full width</GridItem>
  <GridItem columnSpan={6}>Half width</GridItem>
  <GridItem columnSpan={6}>Half width</GridItem>
  <GridItem columnSpan={4}>One third</GridItem>
  <GridItem columnSpan={4}>One third</GridItem>
  <GridItem columnSpan={4}>One third</GridItem>
</GridContainer>;
```

---

## GridContainer

### Props

| Prop             | Type                              | Default      | Description                          |
| ---------------- | --------------------------------- | ------------ | ------------------------------------ |
| `children`       | `ReactNode`                       | —            | Grid items to render.                |
| `columns`        | `number`                          | CSS: `12`    | Number of equal-width columns.       |
| `gap`            | `CSSProperties["gap"]`            | CSS: `1rem`  | Grid gap (row and column).           |
| `autoRows`       | `CSSProperties["gridAutoRows"]`   | CSS: `auto`  | Height of implicitly created rows.   |
| `autoFlow`       | `CSSProperties["gridAutoFlow"]`   | CSS: `row`   | Direction items are placed.          |
| `justifyContent` | `CSSProperties["justifyContent"]` | CSS: `start` | Align grid along the inline axis.    |
| `alignContent`   | `CSSProperties["alignContent"]`   | CSS: `start` | Align grid along the block axis.     |
| `className`      | `string`                          | —            | Additional CSS classes.              |
| `ref`            | `React.Ref<HTMLDivElement>`       | —            | Forwarded to the underlying `<div>`. |
| `...props`       | `HTMLAttributes<HTMLDivElement>`  | —            | All standard HTML div attributes.    |

### CSS Custom Properties

| Property                           | Default | Description                        |
| ---------------------------------- | ------- | ---------------------------------- |
| `--grid-container-columns`         | `12`    | Number of equal-width columns.     |
| `--grid-container-gap`             | `1rem`  | Gap between rows and columns.      |
| `--grid-container-auto-rows`       | `auto`  | Implicit row height.               |
| `--grid-container-auto-flow`       | `row`   | Item auto-placement direction.     |
| `--grid-container-justify-content` | `start` | Inline-axis alignment of the grid. |
| `--grid-container-align-content`   | `start` | Block-axis alignment of the grid.  |

---

## GridItem

### Props

| Prop          | Type                             | Default        | Description                          |
| ------------- | -------------------------------- | -------------- | ------------------------------------ |
| `children`    | `ReactNode`                      | —              | Item content.                        |
| `columnSpan`  | `number`                         | CSS: `12`      | Number of columns to span.           |
| `rowSpan`     | `number`                         | CSS: `1`       | Number of rows to span.              |
| `column`      | `number \| string`               | CSS: `auto`    | Grid column start line.              |
| `row`         | `number \| string`               | CSS: `auto`    | Grid row start line.                 |
| `justifySelf` | `CSSProperties["justifySelf"]`   | CSS: `stretch` | Inline-axis self-alignment.          |
| `alignSelf`   | `CSSProperties["alignSelf"]`     | CSS: `stretch` | Block-axis self-alignment.           |
| `className`   | `string`                         | —              | Additional CSS classes.              |
| `ref`         | `React.Ref<HTMLDivElement>`      | —              | Forwarded to the underlying `<div>`. |
| `...props`    | `HTMLAttributes<HTMLDivElement>` | —              | All standard HTML div attributes.    |

### CSS Custom Properties

| Property                   | Default   | Description                              |
| -------------------------- | --------- | ---------------------------------------- |
| `--grid-item-column-span`  | `12`      | Number of columns to span.               |
| `--grid-item-row-span`     | `1`       | Number of rows to span.                  |
| `--grid-item-column`       | `auto`    | Column start line (`grid-column-start`). |
| `--grid-item-row`          | `auto`    | Row start line (`grid-row-start`).       |
| `--grid-item-justify-self` | `stretch` | Inline-axis self-alignment.              |
| `--grid-item-align-self`   | `stretch` | Block-axis self-alignment.               |

---

## Responsive Use

The library does not define breakpoints. Override CSS custom properties at any breakpoint in your own stylesheet:

```css
/* Mobile-first: items are full width by default (columnSpan CSS default is 12) */

/* Tablet: two columns */
@media (min-width: 640px) {
  .my-item {
    --grid-item-column-span: 6;
  }
}

/* Desktop: three columns */
@media (min-width: 1024px) {
  .my-item {
    --grid-item-column-span: 4;
  }
}
```

Apply the class to `GridItem`:

```tsx
<GridContainer columns={12}>
  <GridItem className="my-item">content</GridItem>
</GridContainer>
```
