# Checkbox

A styled checkbox component built on top of the `Input` component. It supports controlled behavior and theming via CSS Custom Properties.

## Usage

```tsx
import { Checkbox } from "@froglet/ui";

<Checkbox checked={true} onChange={() => {}} />;
```

## Props

The `Checkbox` component accepts all standard HTML `<input type="checkbox">` attributes, as well as the following props:

| Prop        | Type                                                   | Description                              |
| ----------- | ------------------------------------------------------ | ---------------------------------------- |
| `checked`   | `boolean`                                              | The current checked state (controlled).  |
| `onChange`  | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Callback when the checked state changes. |
| `className` | `string`                                               | Additional CSS classes for styling.      |

## CSS Custom Properties

The `Checkbox` component uses the following CSS custom properties for design tokens:

```css
--checkbox-size
--checkbox-border-width
--checkbox-border-color
--checkbox-border-radius
--checkbox-background-color
--checkbox-border-color-hover
--checkbox-background-color-hover
--checkbox-outline-width-focus
--checkbox-outline-color-focus
--checkbox-outline-offset-focus
--checkbox-border-color-checked
--checkbox-background-color-checked
--checkbox-checkmark-color-checked
--checkbox-clip-path-checked
--checkbox-border-color-disabled
--checkbox-background-color-disabled
--checkbox-checkmark-color-disabled
```

## Related Components

- [`Input`](../Input/README.md) – A general-purpose input field used as the base for form components.
- [`Radio`](../Radio/README.md) – A single-select input built on the `Input` component, similar in behavior and style.
