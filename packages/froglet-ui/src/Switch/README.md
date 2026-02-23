# Switch

A brandless toggle switch wrapping `<input type="checkbox" role="switch">`. The `role="switch"` attribute overrides the default checkbox ARIA role so screen readers announce the control as a toggle (on/off) rather than a checkbox (checked/unchecked).

All visual styling — track color, thumb size, transition — is driven by CSS custom properties. Apply a modifier class to theme it.

## Usage

```tsx
import { Switch } from "@froglet/ui";

function Example() {
  const [enabled, setEnabled] = useState(false);
  return <Switch checked={enabled} onChange={() => setEnabled(!enabled)} />;
}
```

### Themed

```tsx
<Switch
  className="switch--froglet"
  checked={enabled}
  onChange={() => setEnabled(!enabled)}
/>
```

## Props

| Prop        | Type                          | Default    | Description                                                            |
| ----------- | ----------------------------- | ---------- | ---------------------------------------------------------------------- |
| `checked`   | `boolean`                     | —          | Controlled checked state.                                              |
| `onChange`  | `(e) => void`                 | `() => {}` | Change handler.                                                        |
| `disabled`  | `boolean`                     | `false`    | Disables the switch.                                                   |
| `role`      | `string`                      | `"switch"` | ARIA role. Override to `"checkbox"` to revert screen reader semantics. |
| `className` | `string`                      | —          | Additional CSS classes. Use to apply a token block.                    |
| `ref`       | `React.Ref<HTMLInputElement>` | —          | Forwarded to the underlying `<input>` element.                         |

All other `<input>` attributes are forwarded via `...props`.

## CSS Custom Properties

| Token                                | Default          | Description                                                                        |
| ------------------------------------ | ---------------- | ---------------------------------------------------------------------------------- |
| `--switch-width`                     | `2.5rem`         | Track width.                                                                       |
| `--switch-height`                    | `1.25rem`        | Track height.                                                                      |
| `--switch-border-radius`             | `9999px`         | Track corner rounding (pill).                                                      |
| `--switch-background-color`          | `GrayText`       | Track color — unchecked.                                                           |
| `--switch-background-color-hover`    | _(same as base)_ | Track color — unchecked hover. Defaults to `--switch-background-color`.            |
| `--switch-background-color-checked`  | `currentColor`   | Track color — checked.                                                             |
| `--switch-background-color-disabled` | `GrayText`       | Track color — disabled (both states).                                              |
| `--switch-thumb-size`                | `1rem`           | Thumb diameter.                                                                    |
| `--switch-thumb-color`               | `Canvas`         | Thumb fill — default.                                                              |
| `--switch-thumb-color-disabled`      | `Canvas`         | Thumb fill — disabled.                                                             |
| `--switch-thumb-offset`              | `0.125rem`       | Gap between thumb and track edge. Also used to compute the checked thumb position. |
| `--switch-outline-width-focus`       | `2px`            | Focus ring width.                                                                  |
| `--switch-outline-color-focus`       | `currentColor`   | Focus ring color.                                                                  |
| `--switch-outline-offset-focus`      | `2px`            | Focus ring offset.                                                                 |

### Thumb position

The thumb slides from `left: var(--switch-thumb-offset)` (unchecked) to `left: calc(100% - var(--switch-thumb-size) - var(--switch-thumb-offset))` (checked). If you change `--switch-thumb-size` or `--switch-thumb-offset`, the checked position updates automatically.

## Variants

Apply a modifier class that sets CSS custom properties:

```css
.switch--froglet {
  --switch-background-color: #9ca3af;
  --switch-background-color-checked: #2e8b57;
  --switch-background-color-disabled: #e5e7eb;
  --switch-thumb-color: #ffffff;
  --switch-thumb-color-disabled: #ffffff;
  --switch-outline-width-focus: 2px;
  --switch-outline-color-focus: #5eba87;
  --switch-outline-offset-focus: 3px;
}
```

## Accessibility

- `role="switch"` marks the control as an on/off toggle. Screen readers announce the current state as "on" or "off" rather than "checked" or "unchecked".
- To revert to standard checkbox semantics, pass `role="checkbox"`.
- The focus ring uses `:focus-visible` only — keyboard users see the ring, pointer users do not.
- A visible label (`<label>` or `aria-label`) is required for screen reader users.
