# Input

A brandless text input component. All visual styling is driven by CSS custom properties. Accepts all standard HTML `<input>` attributes and works with any text-type variant: `text`, `email`, `password`, `search`, `tel`, `url`, `number`, `date`, `time`, `datetime-local`, `month`, and `week`.

## Usage

```tsx
import { Input } from "@froglet/ui";

<Input type="email" placeholder="you@example.com" />;
```

## Props

`Input` accepts all standard HTML `<input>` attributes in addition to:

| Prop        | Type                          | Description                                         |
| ----------- | ----------------------------- | --------------------------------------------------- |
| `className` | `string`                      | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLInputElement>` | Forwarded to the underlying `<input>` element.      |

Additional attributes passed through `...props`: `type`, `inputMode`, `placeholder`, `disabled`, `required`, `pattern`, `min`, `max`, `step`, `minLength`, `maxLength`, `autoComplete`, and all other `InputHTMLAttributes`.

## CSS Custom Properties

This component is Button-like — it does not use `appearance: none`, so the browser provides base rendering when tokens are not set. Apply all tokens via a modifier class.

| Token                               | Default          | Description                        |
| ----------------------------------- | ---------------- | ---------------------------------- |
| `--input-padding`                   | `0.5rem 0.75rem` | Inner padding                      |
| `--input-border-width`              | `1px`            | Border thickness                   |
| `--input-border-style`              | `solid`          | Border style                       |
| `--input-border-color`              | —                | Border color (base)                |
| `--input-border-radius`             | `0`              | Corner radius                      |
| `--input-font-size`                 | `1rem`           | Font size                          |
| `--input-text-color`                | —                | Text color (base)                  |
| `--input-background-color`          | —                | Background color (base)            |
| `--input-text-color-placeholder`    | —                | Placeholder text color             |
| `--input-border-color-hover`        | —                | Border color on hover              |
| `--input-background-color-hover`    | —                | Background color on hover          |
| `--input-text-color-hover`          | —                | Text color on hover                |
| `--input-border-color-focus`        | —                | Border color on `:focus-visible`   |
| `--input-outline-width-focus`       | `2px`            | Outline width on `:focus-visible`  |
| `--input-outline-color-focus`       | —                | Outline color on `:focus-visible`  |
| `--input-outline-offset-focus`      | `2px`            | Outline offset on `:focus-visible` |
| `--input-border-color-disabled`     | —                | Border color when disabled         |
| `--input-text-color-disabled`       | —                | Text color when disabled           |
| `--input-background-color-disabled` | —                | Background color when disabled     |
| `--input-border-color-invalid`      | —                | Border color on `:invalid`         |

## Browser Normalizations

The following browser-native UI elements are normalized by default for consistent cross-browser appearance:

- **`type="search"`** — the WebKit cancel button (×) is hidden. Override with your own CSS if you need it.
- **`type="number"`** — spin buttons are hidden (`-webkit-appearance: none`; Firefox `textfield` mode). Override to restore them.

These normalizations apply to the `.input` class only and do not affect other form controls.

## Theming

Apply a modifier class that sets the token block:

```css
.input--brand {
  --input-border-color: #d1d5db;
  --input-border-radius: 6px;
  --input-text-color: #111827;
  --input-background-color: #ffffff;

  --input-border-color-focus: #2e8b57;
  --input-outline-color-focus: #5eba87;

  --input-border-color-disabled: #e5e7eb;
  --input-text-color-disabled: #d1d5db;
  --input-background-color-disabled: #f9fafb;

  --input-border-color-invalid: #dc2626;
}
```

For token naming conventions, see the [CSS Composition guide](../../docs/css-composition.md).

## Related Components

- [Checkbox](../Checkbox/README.md) — uses `Input` internally with `type="checkbox"`
- [Radio](../Radio/README.md) — uses `Input` internally with `type="radio"`
