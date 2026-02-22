# Checkbox

A brandless checkbox input. All visual styling is driven by CSS custom properties — no defaults are applied for colors, so the component renders as a plain browser checkbox until tokens are provided.

## Usage

```tsx
import { Checkbox } from "@froglet/ui";

const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onChange={() => setChecked(!checked)} />;
```

## Props

| Prop        | Type                                                   | Description                                                        |
| ----------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| `checked`   | `boolean`                                              | The current checked state (controlled).                            |
| `onChange`  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Callback fired when the checked state changes.                     |
| `className` | `string`                                               | Additional CSS classes. Use to apply a token block (see Variants). |
| `ref`       | `React.Ref<HTMLInputElement>`                          | Forwarded to the underlying `<input>` element.                     |
| `...props`  | `InputHTMLAttributes<HTMLInputElement>`                | All standard HTML input attributes (`disabled`, `aria-*`, etc.).   |

## CSS Custom Properties

Because `appearance: none` fully opts out of browser rendering, color properties use CSS system color keywords as neutral fallbacks. The unstyled component is visible without any tokens set. Override with a modifier class to apply brand colors.

| Property                               | Default                        | Description                         |
| -------------------------------------- | ------------------------------ | ----------------------------------- |
| `--checkbox-size`                      | `1rem`                         | Width and height of the checkbox    |
| `--checkbox-border-width`              | `2px`                          | Border width                        |
| `--checkbox-border-style`              | `solid`                        | Border style                        |
| `--checkbox-border-color`              | `currentColor`                 | Border color                        |
| `--checkbox-border-radius`             | `4px`                          | Corner radius                       |
| `--checkbox-background-color`          | `transparent`                  | Background color (unchecked)        |
| `--checkbox-border-color-hover`        | `currentColor`                 | Border color on hover               |
| `--checkbox-background-color-hover`    | `transparent`                  | Background color on hover           |
| `--checkbox-outline-width-focus`       | `2px`                          | Focus ring width                    |
| `--checkbox-outline-color-focus`       | `currentColor`                 | Focus ring color (`:focus-visible`) |
| `--checkbox-outline-offset-focus`      | `2px`                          | Focus ring offset                   |
| `--checkbox-border-color-checked`      | `currentColor`                 | Border color when checked           |
| `--checkbox-background-color-checked`  | `currentColor`                 | Background color when checked       |
| `--checkbox-checkmark-color-checked`   | `Canvas`                       | Checkmark color when checked        |
| `--checkbox-clip-path-checked`         | `polygon(14% 44%, 38% 72%, …)` | Clip-path for the checkmark shape   |
| `--checkbox-border-color-disabled`     | `GrayText`                     | Border color when disabled          |
| `--checkbox-background-color-disabled` | `Canvas`                       | Background color when disabled      |
| `--checkbox-checkmark-color-disabled`  | `GrayText`                     | Checkmark color when disabled       |

## Variants

Variants are not built into the component. Apply a CSS class that sets the appropriate tokens for your brand.

```tsx
<Checkbox
  className="checkbox--brand"
  checked={checked}
  onChange={handleChange}
/>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- Renders as a semantic `<input type="checkbox">` with full keyboard and screen reader support.
- Focus is indicated via `:focus-visible` — keyboard users see the outline, pointer users do not.
- `disabled` removes interactivity and updates visual state via the disabled token set.
- Always associate a visible label using a `<label>` element or `aria-label`.

## Related Components

- [`Input`](../Input/README.md) — The base input component used internally.
- [`Radio`](../Radio/README.md) — Single-select input with similar token structure.
