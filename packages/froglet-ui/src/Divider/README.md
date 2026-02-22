# Divider

A brandless separator element. All visual styling is driven by CSS custom properties — no color defaults are applied, so the component renders with inherited text color until tokens are provided.

## Usage

```tsx
import { Divider } from "@froglet/ui";

<Divider />;
```

Accepts all standard global HTML attributes: `id`, `style`, `aria-*`, and more.

### Vertical

```tsx
<div style={{ display: "flex", height: "4rem", alignItems: "center" }}>
  <span>Left</span>
  <Divider orientation="vertical" />
  <span>Right</span>
</div>
```

## Props

| Prop          | Type                            | Default        | Description                                                                                                            |
| ------------- | ------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `orientation` | `"horizontal" \| "vertical"`    | `"horizontal"` | Visual and semantic orientation. Adds `.divider--vertical` class and sets `aria-orientation="vertical"` when vertical. |
| `className`   | `string`                        | —              | Additional CSS classes. Use to apply a token block (see Variants).                                                     |
| `ref`         | `React.Ref<HTMLHRElement>`      | —              | Forwarded to the underlying `<hr>` element.                                                                            |
| `...props`    | `HTMLAttributes<HTMLHRElement>` | —              | All standard global HTML attributes.                                                                                   |

## CSS Custom Properties

| Token                    | Default  | Description                                                   |
| ------------------------ | -------- | ------------------------------------------------------------- |
| `--divider-border-width` | `1px`    | Line thickness                                                |
| `--divider-border-style` | `solid`  | Line style (`solid`, `dashed`, `dotted`, etc.)                |
| `--divider-border-color` | —        | Line color. No default; renders as `currentColor` when unset. |
| `--divider-margin`       | `1rem 0` | Surrounding space (horizontal). Use `0 1rem` for vertical.    |
| `--divider-width`        | `100%`   | Width of the horizontal divider                               |
| `--divider-height`       | `100%`   | Height of the vertical divider                                |

Color tokens with no default (—) are intentionally bare: apply a modifier class to provide colors.

## Variants

Variants are not built into the component. Apply a CSS class that sets the appropriate tokens for your brand.

```tsx
<Divider className="divider--brand" />
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- The `<hr>` element has an implicit ARIA `role="separator"` with `aria-orientation="horizontal"`.
- When `orientation="vertical"`, `aria-orientation="vertical"` is set explicitly.
- No interactive focus ring is needed — `<hr>` is not focusable.
