# Progress

A brandless progress bar wrapping a `<progress>` element. All visual styling — fill color, track color, height, border-radius — is driven by CSS custom properties. Apply a modifier class to theme it.

## Usage

```tsx
import { Progress } from "@froglet/ui";

// Determinate — 60% complete
<Progress value={0.6} max={1} />

// Indeterminate — omit value
<Progress max={1} />
```

### Themed

```tsx
<Progress className="progress--primary" value={0.75} max={1} />
```

## Props

| Prop        | Type                             | Default | Description                                                  |
| ----------- | -------------------------------- | ------- | ------------------------------------------------------------ |
| `value`     | `number`                         | —       | Current progress (0 to `max`). Omit for indeterminate state. |
| `max`       | `number`                         | `1`     | Maximum value.                                               |
| `className` | `string`                         | —       | Additional CSS classes. Use to apply a token block.          |
| `ref`       | `React.Ref<HTMLProgressElement>` | —       | Forwarded to the underlying `<progress>` element.            |

All other `HTMLAttributes<HTMLProgressElement>` are forwarded via `...props`.

## CSS Custom Properties

| Token                         | Default        | Description                                   |
| ----------------------------- | -------------- | --------------------------------------------- |
| `--progress-width`            | `100%`         | Track width.                                  |
| `--progress-height`           | `0.5rem`       | Track height.                                 |
| `--progress-border-radius`    | `9999px`       | Track and fill corner rounding (pill).        |
| `--progress-background-color` | `Canvas`       | Track (unfilled portion) background.          |
| `--progress-fill-color`       | `currentColor` | Fill color.                                   |
| `--progress-border-width`     | `0`            | Optional border width on the track.           |
| `--progress-border-style`     | `solid`        | Border style.                                 |
| `--progress-border-color`     | —              | Border color. Bare var; no border when unset. |

### Cross-browser notes

The component uses `appearance: none` and vendor-prefixed pseudo-element selectors to provide consistent styling across browsers:

- WebKit/Blink: `::-webkit-progress-bar` (track) and `::-webkit-progress-value` (fill)
- Firefox: `::-moz-progress-bar` (fill); the `color` property on the element controls fill color

## Variants

Apply a modifier class that sets CSS custom properties:

```css
.progress--primary {
  --progress-fill-color: #2e8b57;
  --progress-background-color: #f0f7f4;
  --progress-border-radius: 6px;
}

.progress--danger {
  --progress-fill-color: #dc2626;
  --progress-background-color: #fee2e2;
  --progress-border-radius: 6px;
}
```

## Indeterminate state

Passing no `value` prop renders the element in its indeterminate state. With `appearance: none` applied, the native browser indeterminate animation is stripped. If you need an indeterminate animation, add a CSS animation to the fill pseudo-element via a modifier class.
