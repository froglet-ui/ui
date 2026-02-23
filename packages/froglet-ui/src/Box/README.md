# Box

A brandless generic container wrapping a `<div>` element. Provides a CSS token surface for borders, background, padding, and shadow — nothing more. Apply a modifier class to style it.

## Usage

```tsx
import { Box } from "@froglet/ui";

<Box>Content here.</Box>;
```

Themed with a modifier class:

```tsx
<Box className="box--brand">
  <p>Content here.</p>
</Box>
```

## Props

| Prop        | Type                             | Description                                                        |
| ----------- | -------------------------------- | ------------------------------------------------------------------ |
| `children`  | `ReactNode`                      | Box content.                                                       |
| `className` | `string`                         | Additional CSS classes. Use to apply a token block (see Variants). |
| `ref`       | `React.Ref<HTMLDivElement>`      | Forwarded to the underlying `<div>` element.                       |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | All standard HTML div attributes.                                  |

## CSS Custom Properties

### Box (`.box`)

| Token                    | Default       | Description      |
| ------------------------ | ------------- | ---------------- |
| `--box-padding`          | `0`           | Inner spacing.   |
| `--box-background-color` | `transparent` | Background fill. |
| `--box-border-width`     | `1px`         | Border width.    |
| `--box-border-style`     | `solid`       | Border style.    |
| `--box-border-color`     | `#e5e7eb`     | Border color.    |
| `--box-border-radius`    | `4px`         | Corner rounding. |
| `--box-shadow`           | `none`        | Box shadow.      |

## Variants

Variants are not built into the component. Apply CSS classes that set the appropriate tokens for your brand.

```tsx
<Box className="box--brand">
  <p>Content here.</p>
</Box>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.
