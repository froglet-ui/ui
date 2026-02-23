# Alert

A brandless status notification container wrapping a `<div role="alert">`. The `role` attribute identifies the element as an ARIA live region — screen readers announce its content when it appears. All visual styling is driven by CSS custom properties; apply a modifier class to theme it.

## Usage

```tsx
import { Alert } from "@froglet/ui";

<Alert>Your changes have been saved.</Alert>;
```

Override `role` for lower-urgency messages:

```tsx
<Alert role="status">Loading complete.</Alert>
```

Apply modifier classes to theme it:

```tsx
<Alert className="alert--success">Your changes have been saved.</Alert>
<Alert className="alert--error">Something went wrong. Please try again.</Alert>
```

## Props

| Prop        | Type                             | Description                                                                   |
| ----------- | -------------------------------- | ----------------------------------------------------------------------------- |
| `children`  | `ReactNode`                      | Alert content — the notification message.                                     |
| `className` | `string`                         | Additional CSS classes. Use to apply a token block (see Variants).            |
| `role`      | `string`                         | ARIA role. Defaults to `"alert"`. Override with `"status"` for lower urgency. |
| `ref`       | `React.Ref<HTMLDivElement>`      | Forwarded to the underlying `<div>` element.                                  |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | All standard HTML div attributes.                                             |

## CSS Custom Properties

### Alert (`.alert`)

| Token                      | Default        | Description      |
| -------------------------- | -------------- | ---------------- |
| `--alert-padding`          | `0.75rem 1rem` | Inner spacing.   |
| `--alert-background-color` | `#f9fafb`      | Background fill. |
| `--alert-text-color`       | `#374151`      | Text color.      |
| `--alert-border-width`     | `1px`          | Border width.    |
| `--alert-border-style`     | `solid`        | Border style.    |
| `--alert-border-color`     | `#e5e7eb`      | Border color.    |
| `--alert-border-radius`    | `4px`          | Corner rounding. |

## Variants

Variants are not built into the component. Apply CSS classes that set the appropriate tokens for your brand.

```tsx
<Alert className="alert--success">Success message.</Alert>
<Alert className="alert--error">Error message.</Alert>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- `role="alert"` marks the element as an ARIA live region with `aria-live="assertive"`. Screen readers interrupt the user to announce the content when it is inserted into the DOM.
- Use `role="status"` (with implied `aria-live="polite"`) for non-urgent status messages that should not interrupt.
- Do not use Alert as a purely decorative container — only when the content is a genuine notification that warrants screen reader announcement.
