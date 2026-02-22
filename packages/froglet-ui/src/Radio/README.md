# Radio

A brandless radio button. All visual styling is driven by CSS custom properties. Extends `InputProps` — accepts all native `<input>` attributes.

Radio buttons must share a `name` prop within a group for correct native browser behavior.

## Usage

```tsx
import { Radio } from "@froglet/ui";

<Radio
  name="option-group"
  value="option1"
  checked={selectedValue === "option1"}
  onChange={(e) => setSelectedValue(e.target.value)}
/>;
```

## Props

| Prop        | Type                                                   | Default    | Description                                         |
| ----------- | ------------------------------------------------------ | ---------- | --------------------------------------------------- |
| `checked`   | `boolean`                                              | —          | Controlled checked state.                           |
| `onChange`  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | `() => {}` | Callback fired when the checked state changes.      |
| `className` | `string`                                               | —          | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLInputElement>`                          | —          | Forwarded to the underlying `<input>` element.      |
| `...props`  | `InputHTMLAttributes<HTMLInputElement>`                | —          | All other native input attributes.                  |

## CSS Custom Properties

| Property                            | Default        | Description                                |
| ----------------------------------- | -------------- | ------------------------------------------ |
| `--radio-size`                      | `1rem`         | Width and height of the radio control      |
| `--radio-border-width`              | `2px`          | Border width                               |
| `--radio-border-style`              | `solid`        | Border style                               |
| `--radio-border-color`              | `currentColor` | Border color (unchecked)                   |
| `--radio-border-radius`             | `50%`          | Border radius (keep `50%` for circle)      |
| `--radio-background-color`          | `transparent`  | Background (unchecked)                     |
| `--radio-border-color-hover`        | `currentColor` | Border color on hover                      |
| `--radio-background-color-hover`    | `transparent`  | Background on hover                        |
| `--radio-outline-width-focus`       | `2px`          | Focus ring width                           |
| `--radio-outline-color-focus`       | `currentColor` | Focus ring color                           |
| `--radio-outline-offset-focus`      | `2px`          | Focus ring offset                          |
| `--radio-border-color-checked`      | `currentColor` | Border color when checked                  |
| `--radio-background-color-checked`  | `currentColor` | Background when checked                    |
| `--radio-dot-color-checked`         | `Canvas`       | Center dot color when checked              |
| `--radio-border-color-disabled`     | `GrayText`     | Border color when disabled                 |
| `--radio-background-color-disabled` | `Canvas`       | Background when disabled                   |
| `--radio-dot-color-disabled`        | `GrayText`     | Center dot color when disabled and checked |

## Variants

Apply a modifier class to theme the radio:

```css
.radio--brand {
  --radio-border-color: #2e8b57;
  --radio-border-color-checked: #2e8b57;
  --radio-background-color-checked: #2e8b57;
  --radio-dot-color-checked: #ffffff;
  --radio-outline-color-focus: #5eba87;
}
```

See [style-guide.md](../../../../docs/style-guide.md) for the Froglet brand token reference.
