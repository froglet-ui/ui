# `<Button>`

The `Button` component provides a customizable, accessible button element with full support for CSS Custom Properties. It supports standard HTML `<button>` attributes and allows for flexible styling using BEM-style class modifiers and scoped CSS variables.

---

## Usage

```tsx
import { Button } from "froglet-ui";

export default function Example() {
  return <Button>Click Me</Button>;
}
```

---

## Props

| Prop        | Type                                      | Default | Description                                                                |
| ----------- | ----------------------------------------- | ------- | -------------------------------------------------------------------------- |
| `children`  | `ReactNode`                               | `—`     | Content inside the button. Supports text, icons, and other elements.       |
| `className` | `string`                                  | `—`     | Additional classes to modify appearance or behavior.                       |
| `...props`  | `ButtonHTMLAttributes<HTMLButtonElement>` | `—`     | All standard HTML button attributes (e.g., `type`, `disabled`, `onClick`). |

---

## CSS Custom Properties

The following custom properties are available to override default styles. These can be scoped using modifier classes or theming strategies.

| Property Name                        | Default Value | Description                              |
| ------------------------------------ | ------------- | ---------------------------------------- |
| `--button-background-color`          | `#007bff`     | Background color of the button           |
| `--button-text-color`                | `#ffffff`     | Text color of the button                 |
| `--button-font-size`                 | `1rem`        | Font size of the button text             |
| `--button-padding`                   | `8px 16px`    | Padding inside the button                |
| `--button-border-color`              | `#007bff`     | Border color of the button               |
| `--button-border-width`              | `2px`         | Width of the button border               |
| `--button-border-radius`             | `4px`         | Corner radius of the button              |
| `--button-background-color-hover`    | `#0056b3`     | Background color on hover                |
| `--button-text-color-hover`          | `#ffffff`     | Text color on hover                      |
| `--button-background-color-disabled` | `#d6d6d6`     | Background color when button is disabled |
| `--button-text-color-disabled`       | `#a1a1a1`     | Text color when button is disabled       |
| `--button-border-color-disabled`     | `#d6d6d6`     | Border color when button is disabled     |

---

## Modifier Classes (BEM-style Hooks)

Froglet UI does not provide built-in modifier classes, but it encourages consumers to create their own using BEM conventions. These classes can be used to override styles via CSS Custom Properties.

### Example: `.button--primary`

```css
.button--primary {
  --button-background-color: #2e8b57;
  --button-text-color: #ffffff;
  --button-border-color: #276c46;
  --button-border-width: 2px;
  --button-border-radius: 8px;
  --button-padding: 12px 24px;
  --button-font-size: 1.2rem;
  --button-background-color-hover: #3ba66b;
  --button-text-color-hover: #ffffff;
  --button-background-color-disabled: #d3e9d7;
  --button-text-color-disabled: #7a9a7d;
}
```

### Example: `.button--secondary`

```css
.button--secondary {
  --button-background-color: #9b4dca;
  --button-text-color: #ffffff;
  --button-border-color: #7a36a4;
  --button-border-radius: 50px;
  --button-padding: 12px 24px;
  --button-font-size: 1.2rem;
  --button-background-color-hover: #b13fd6;
  --button-text-color-hover: #ffffff;
  --button-background-color-disabled: #f5f5f5;
  --button-text-color-disabled: #b0b0b0;
}
```

---

## Accessibility

The `Button` component is a semantic `<button>` element and supports all standard keyboard and screen reader behaviors out of the box. When `disabled`, it becomes non-interactive and updates its visual state via custom properties.

---

## Best Practices

- Use BEM modifier classes like `button--primary` or `button--secondary` to theme buttons via custom properties without modifying base styles.
- Avoid hardcoding colors or sizes in external stylesheets—leverage the exposed custom properties instead.
