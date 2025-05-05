# Textarea

The `Textarea` component provides a styled multi-line text input area with full support for native HTML attributes and customizable design using scoped CSS custom properties. It is part of the Froglet UI library and promotes flexibility through utility class composition and design tokens.

## Usage

```tsx
import { Textarea } from "@froglet/ui";

<Textarea placeholder="Enter your message here..." />;
```

## Props

The `Textarea` component extends all native `HTMLTextAreaElement` attributes, along with the following additional prop:

| Prop        | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| `className` | `string` | Additional CSS classes to apply. |

## CSS Custom Properties

You can customize the appearance of the Textarea using the following scoped CSS variables:

```css
--textarea-background-color
--textarea-text-color
--textarea-font-size
--textarea-line-height
--textarea-padding
--textarea-border-color
--textarea-border-width
--textarea-border-radius
--textarea-background-color-hover
--textarea-border-color-hover
--textarea-background-color-disabled
--textarea-text-color-disabled
--textarea-border-color-disabled
--textarea-border-color-focus
--textarea-box-shadow-focus
```

## Accessibility

The `Textarea` component is accessible by default and supports all standard accessibility practices for native `<textarea>` elements. Always use appropriate `aria-` attributes and label elements to ensure clarity for assistive technologies.

## Best Practices

- Always provide a `placeholder` or an associated `<label>` for context.
- Consider limiting `resize` via CSS if layout constraints are important.
- Avoid excessive use of `min-height`—let content and context drive height decisions.
