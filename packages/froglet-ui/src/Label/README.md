# Label

A brandless label element. All visual styling is driven by CSS custom properties — no typography defaults are applied beyond `inherit`, so the component renders with surrounding text styles until tokens are provided.

## Usage

```tsx
import { Label } from "@froglet/ui";

<Label htmlFor="email">Email address</Label>;
```

Associates with a form control via `htmlFor`. Accepts all standard `<label>` attributes.

### Wrapping a control

```tsx
<Label>
  Email address
  <input id="email" type="email" />
</Label>
```

## Props

| Prop        | Type                                    | Description                                                        |
| ----------- | --------------------------------------- | ------------------------------------------------------------------ |
| `children`  | `ReactNode`                             | Label text or content.                                             |
| `className` | `string`                                | Additional CSS classes. Use to apply a token block (see Variants). |
| `htmlFor`   | `string`                                | ID of the associated form control.                                 |
| `ref`       | `React.Ref<HTMLLabelElement>`           | Forwarded to the underlying `<label>` element.                     |
| `...props`  | `LabelHTMLAttributes<HTMLLabelElement>` | All standard HTML label attributes.                                |

## CSS Custom Properties

| Token                 | Default   | Description                                                      |
| --------------------- | --------- | ---------------------------------------------------------------- |
| `--label-font-family` | `inherit` | Font family                                                      |
| `--label-font-size`   | `inherit` | Font size                                                        |
| `--label-font-weight` | `inherit` | Font weight                                                      |
| `--label-text-color`  | —         | Text color. No default; inherits surrounding `color` when unset. |
| `--label-margin`      | `0`       | Outer spacing                                                    |

Color tokens with no default (—) are intentionally bare: apply a modifier class to provide colors.

## Variants

Variants are not built into the component. Apply a CSS class that sets the appropriate tokens for your brand.

```tsx
<Label htmlFor="email" className="label--brand">
  Email address
</Label>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- `<label>` natively associates with a form control via `htmlFor` or by wrapping the control.
- Click on a label focuses or activates the associated control — no JavaScript needed.
- No focus ring is needed on the label itself; the associated control receives focus.
