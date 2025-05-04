# Input

A styled input component that supports text input and common HTML input types, designed to be easily themed using CSS Custom Properties.

## Usage

```tsx
import { Input } from "@froglet/ui";

<Input placeholder="Your name" />;
```

## Props

The `Input` component accepts all standard HTML `<input>` attributes. It also accepts the following additional prop:

| Prop        | Type                          | Description                                   |
| ----------- | ----------------------------- | --------------------------------------------- |
| `className` | `string`                      | Additional CSS classes for styling hooks.     |
| `ref`       | `React.Ref<HTMLInputElement>` | Optional React ref to access the DOM element. |

## CSS Custom Properties

The `Input` component uses the following CSS custom properties for design tokens:

```css
--input-padding
--input-border-width
--input-border-color
--input-border-radius
--input-font-size
--input-text-color
--input-background-color
--input-text-color-placeholder
--input-border-color-focus
--input-outline-width-focus
--input-outline-color-focus
--input-outline-offset-focus
--input-border-color-disabled
--input-text-color-disabled
--input-background-color-disabled
--input-border-color-invalid
```

These properties can be overridden in your own styles or with utility classes like `.input--primary`, `.input--secondary`, etc., to create different visual styles.

## Related Components

- [`Checkbox`](../Checkbox/README.md) – A form control styled similarly to the Input, enabling selection from multiple options.
- [`Radio`](../Radio/README.md) – A form control that extends the Input component, providing a single-choice selection from a group of options.
