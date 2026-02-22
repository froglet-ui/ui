# Link

A brandless anchor element. All visual styling is driven by CSS custom properties — no color defaults are applied, so the component renders with inherited text color until tokens are provided.

## Usage

```tsx
import { Link } from "@froglet/ui";

<Link href="https://example.com">Visit Example</Link>;
```

Accepts all standard `<a>` attributes: `href`, `target`, `rel`, `aria-*`, and more.

## Props

| Prop        | Type                                      | Description                                                        |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------ |
| `children`  | `ReactNode`                               | Link content. Supports text, icons, and other React nodes.         |
| `className` | `string`                                  | Additional CSS classes. Use to apply a token block (see Variants). |
| `ref`       | `React.Ref<HTMLAnchorElement>`            | Forwarded to the underlying `<a>` element.                         |
| `...props`  | `AnchorHTMLAttributes<HTMLAnchorElement>` | All standard HTML anchor attributes.                               |

## CSS Custom Properties

| Token                          | Default        | Description                            |
| ------------------------------ | -------------- | -------------------------------------- |
| `--link-padding`               | `0`            | Inner spacing                          |
| `--link-font-family`           | `inherit`      | Font family                            |
| `--link-font-size`             | `inherit`      | Font size                              |
| `--link-font-weight`           | `inherit`      | Font weight                            |
| `--link-text-color`            | —              | Text color (base)                      |
| `--link-text-decoration`       | `underline`    | Text decoration (base)                 |
| `--link-text-color-hover`      | —              | Text color on hover                    |
| `--link-text-decoration-hover` | —              | Text decoration on hover               |
| `--link-text-color-active`     | —              | Text color when active                 |
| `--link-outline-width-focus`   | `2px`          | Focus outline width                    |
| `--link-outline-color-focus`   | `currentColor` | Focus outline color (`:focus-visible`) |
| `--link-outline-offset-focus`  | `2px`          | Focus outline offset                   |
| `--link-text-decoration-focus` | `underline`    | Text decoration on focus               |
| `--link-text-color-visited`    | —              | Text color for visited links           |

Color tokens with no default (—) are intentionally bare: apply a modifier class to provide colors.

## Variants

Variants are not built into the component. Apply a CSS class that sets the appropriate tokens for your brand.

```tsx
<Link href="https://example.com" className="link--brand">
  Visit Example
</Link>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- Focus ring uses `:focus-visible` only — keyboard users see the ring; pointer users do not.
- `currentColor` fallback on `--link-outline-color-focus` prevents silently removing the focus ring when no token is set.
- Native anchor semantics are preserved: `href`, `target`, `rel`, and all ARIA attributes pass through.
