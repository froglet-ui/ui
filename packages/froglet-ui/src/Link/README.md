# Link

The `Link` component is a styled anchor element that utilizes CSS Custom Properties for flexible and accessible theming. While minimal by default, it allows consumers to apply modifier classes and scoped design tokens for full customization.

## Usage

Import and use the `Link` component to render anchor elements:

```tsx
import { Link } from "@froglet/ui";

<Link href="https://example.com">Visit Example</Link>;
```

This component accepts all standard anchor tag attributes, including `href`, `target`, `rel`, `aria-*`, and more.

## Props

In addition to all native anchor tag attributes, `Link` supports:

| Prop        | Type        | Description                                |
| ----------- | ----------- | ------------------------------------------ |
| `children`  | `ReactNode` | Link text or elements inside the link tag. |
| `className` | `string`    | Optional utility or modifier classes.      |

## CSS Custom Properties

The following custom properties can be overridden globally, scoped with modifier classes, or applied inline:

```css
--link-text-color
--link-font-family
--link-font-size
--link-font-weight
--link-text-decoration
--link-padding
--link-text-color-active
--link-outline-width-focus
--link-outline-color-focus
--link-outline-offset-focus
--link-text-decoration-focus
--link-text-color-hover
--link-text-decoration-hover
--link-text-color-visited
```

## Accessibility

- Keyboard focus outlines are fully customizable.
- Native anchor behavior is preserved (e.g. `target`, `rel`, `aria-*` attributes).
- Styling supports visited/hover/active/focus-visible states.

## Best Practices

For consistent styling guidance, refer to the shared [Modifiers](../../../../docs/modifiers.md).
