# Badge

A brandless inline badge element. All visual styling is driven by CSS custom properties. Unlike native form elements, `<span>` carries no browser UA styles — so the base `.badge` class ships with neutral gray fallbacks to ensure the component renders as a recognizable badge without any modifier class applied.

## Usage

```tsx
import { Badge } from "@froglet/ui";

<Badge>New</Badge>;
```

Apply a modifier class to theme it:

```tsx
<Badge className="badge--brand">New</Badge>
```

## Props

| Prop        | Type                              | Description                                                        |
| ----------- | --------------------------------- | ------------------------------------------------------------------ |
| `children`  | `ReactNode`                       | Badge text or content.                                             |
| `className` | `string`                          | Additional CSS classes. Use to apply a token block (see Variants). |
| `ref`       | `React.Ref<HTMLSpanElement>`      | Forwarded to the underlying `<span>` element.                      |
| `...props`  | `HTMLAttributes<HTMLSpanElement>` | All standard HTML span attributes.                                 |

## CSS Custom Properties

| Token                      | Default           | Description                                                              |
| -------------------------- | ----------------- | ------------------------------------------------------------------------ |
| `--badge-background-color` | `#e5e7eb`         | Background fill.                                                         |
| `--badge-text-color`       | `#374151`         | Text color.                                                              |
| `--badge-border-radius`    | `9999px`          | Corner rounding (pill shape).                                            |
| `--badge-padding`          | `0.125rem 0.5rem` | Inner spacing.                                                           |
| `--badge-font-family`      | `inherit`         | Font family.                                                             |
| `--badge-font-size`        | `inherit`         | Font size.                                                               |
| `--badge-font-weight`      | `inherit`         | Font weight.                                                             |
| `--badge-line-height`      | `inherit`         | Line height.                                                             |
| `--badge-border-width`     | `0`               | Border width. Set to `1px` to enable an outline badge.                   |
| `--badge-border-style`     | `solid`           | Border style.                                                            |
| `--badge-border-color`     | —                 | Border color. Bare var; only visible when `--badge-border-width` is set. |

Only `--badge-border-color` is intentionally bare — it is only visible when `--badge-border-width` is set, so no fallback is needed.

## Variants

Variants are not built into the component. Apply a CSS class that sets the appropriate tokens for your brand.

```tsx
<Badge className="badge--brand">New</Badge>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- `<span>` has no implicit ARIA role. For a live-region notification badge (e.g. an unread count), add `role="status"` and `aria-live="polite"`.
- For purely decorative indicators, no additional ARIA is needed.
- Ensure text contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text) when choosing background and text token values.
