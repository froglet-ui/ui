# Button

A brandless `<button>` element. All visual styling is driven by CSS custom properties — no defaults are applied for colors, so the component renders as a plain browser button until tokens are provided.

## Usage

```tsx
import { Button } from "@froglet/ui";

<Button type="button" onClick={handleClick}>
  Save changes
</Button>;
```

## Props

| Prop        | Type                                      | Description                                                        |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------ |
| `children`  | `ReactNode`                               | Button label. Supports text, icons, and other React nodes.         |
| `className` | `string`                                  | Additional CSS classes. Use to apply a token block (see Variants). |
| `ref`       | `React.Ref<HTMLButtonElement>`            | Forwarded to the underlying `<button>` element.                    |
| `...props`  | `ButtonHTMLAttributes<HTMLButtonElement>` | All standard HTML button attributes (`type`, `disabled`, etc.).    |

## CSS Custom Properties

All color properties have no fallback and must be set by the consumer. Structural properties have neutral browser-compatible defaults.

| Property                             | Default       | Description                         |
| ------------------------------------ | ------------- | ----------------------------------- |
| `--button-background-color`          | —             | Background color                    |
| `--button-text-color`                | —             | Text color                          |
| `--button-border-color`              | —             | Border color                        |
| `--button-border-style`              | `solid`       | Border style                        |
| `--button-border-width`              | `2px`         | Border width                        |
| `--button-border-radius`             | `0`           | Corner radius                       |
| `--button-font-size`                 | `1rem`        | Font size                           |
| `--button-padding`                   | `0.5rem 1rem` | Inner padding                       |
| `--button-background-color-hover`    | —             | Background color on hover           |
| `--button-text-color-hover`          | —             | Text color on hover                 |
| `--button-outline-color-focus`       | —             | Focus ring color (`:focus-visible`) |
| `--button-outline-width-focus`       | `2px`         | Focus ring width                    |
| `--button-outline-offset-focus`      | `2px`         | Focus ring offset                   |
| `--button-background-color-disabled` | —             | Background color when disabled      |
| `--button-text-color-disabled`       | —             | Text color when disabled            |
| `--button-border-color-disabled`     | —             | Border color when disabled          |

## Variants

Variants are not built into the component. Apply a CSS class that sets the appropriate tokens for your brand.

A typical button system includes four semantic levels:

- **Primary** — high-emphasis, main call to action
- **Secondary** — medium-emphasis, supporting action
- **Tertiary** — low-emphasis, cancel or supplemental
- **Danger** — destructive action, delete or irreversible

```tsx
<Button className="button--primary">Save</Button>
<Button className="button--danger" type="button">Delete</Button>
```

Each variant class sets values for all required tokens. See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- Renders as a semantic `<button>` element with full keyboard and screen reader support.
- Focus is indicated via `:focus-visible` — keyboard users see the outline, pointer users do not.
- `disabled` removes interactivity and updates visual state via the disabled token set.
- Always provide a meaningful label via `children` or `aria-label`.
