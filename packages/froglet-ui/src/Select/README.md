# Select

A brandless select element. All visual styling is driven by CSS custom properties. Accepts all native `<select>` attributes.

Uses `appearance: none` — the browser's native select rendering is fully removed. Color fallbacks use CSS system color keywords (`Canvas`, `CanvasText`, `GrayText`, `currentColor`) so the unstyled component remains visible in both light and dark mode.

## Usage

```tsx
import { Select } from "@froglet/ui";

<Select>
  <option value="one">Option One</option>
  <option value="two">Option Two</option>
</Select>;
```

## Props

| Prop        | Type                                      | Default | Description                                         |
| ----------- | ----------------------------------------- | ------- | --------------------------------------------------- |
| `children`  | `ReactNode`                               | —       | `<option>` elements to display in the dropdown.     |
| `className` | `string`                                  | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLSelectElement>`            | —       | Forwarded to the underlying `<select>` element.     |
| `...props`  | `SelectHTMLAttributes<HTMLSelectElement>` | —       | All standard HTML select attributes.                |

## CSS Custom Properties

| Property                             | Default          | Description                |
| ------------------------------------ | ---------------- | -------------------------- |
| `--select-border-width`              | `1px`            | Border width               |
| `--select-border-style`              | `solid`          | Border style               |
| `--select-border-color`              | `currentColor`   | Border color               |
| `--select-border-radius`             | `0`              | Border radius              |
| `--select-padding`                   | `0.5rem 0.75rem` | Internal padding           |
| `--select-font-size`                 | `1rem`           | Font size                  |
| `--select-text-color`                | `CanvasText`     | Text color                 |
| `--select-background-color`          | `Canvas`         | Background color           |
| `--select-text-color-hover`          | `CanvasText`     | Text color on hover        |
| `--select-border-color-hover`        | `currentColor`   | Border color on hover      |
| `--select-background-color-hover`    | `Canvas`         | Background on hover        |
| `--select-border-color-focus`        | `currentColor`   | Border color when focused  |
| `--select-outline-width-focus`       | `2px`            | Focus ring width           |
| `--select-outline-color-focus`       | `currentColor`   | Focus ring color           |
| `--select-outline-offset-focus`      | `2px`            | Focus ring offset          |
| `--select-text-color-disabled`       | `GrayText`       | Text color when disabled   |
| `--select-background-color-disabled` | `Canvas`         | Background when disabled   |
| `--select-border-color-disabled`     | `GrayText`       | Border color when disabled |

## Variants

Apply a modifier class to theme the select:

```css
.select--brand {
  --select-border-color: #d1d5db;
  --select-border-color-focus: #2e8b57;
  --select-outline-color-focus: #5eba87;
  --select-text-color: #111827;
  --select-background-color: #ffffff;
}
```

See [style-guide.md](../../../../docs/style-guide.md) for the Froglet brand token reference.
