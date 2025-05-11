# Select

The `Select` component provides a customizable, accessible dropdown menu using standard HTML `<select>` semantics. It supports full theming via CSS Custom Properties and integrates cleanly into forms and UI systems.

## Usage

```tsx
import { Select } from "froglet-ui";

export default function Example() {
  return (
    <Select>
      <option value="one">Option One</option>
      <option value="two">Option Two</option>
    </Select>
  );
}
```

## Props

| Prop        | Type                                                    | Default    | Description                                                            |
| ----------- | ------------------------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| `children`  | `ReactNode`                                             | `—`        | Option elements to display inside the dropdown. Supports plain or JSX. |
| `className` | `string`                                                | `—`        | Additional classes to modify appearance or behavior.                   |
| `onChange`  | `(event: React.ChangeEvent<HTMLSelectElement>) => void` | `() => {}` | Change handler. Fires when a different option is selected.             |
| `...props`  | `SelectHTMLAttributes<HTMLSelectElement>`               | `—`        | All standard HTML select attributes (e.g., `value`, `disabled`).       |

## CSS Custom Properties

Customize appearance via the following properties. These can be scoped using BEM-style modifier classes or design tokens.

| Property Name                        | Default Value | Description                            |
| ------------------------------------ | ------------- | -------------------------------------- |
| `--select-background-color`          | `#ffffff`     | Background color of the select element |
| `--select-text-color`                | `#000000`     | Text color of the selected value       |
| `--select-font-size`                 | `1rem`        | Font size of the dropdown text         |
| `--select-padding`                   | `8px 12px`    | Padding inside the select              |
| `--select-border-color`              | `#007bff`     | Border color of the select             |
| `--select-border-width`              | `2px`         | Width of the select’s border           |
| `--select-border-radius`             | `4px`         | Corner radius of the select            |
| `--select-background-color-hover`    | `#f2f2f2`     | Background color on hover              |
| `--select-text-color-hover`          | `#000000`     | Text color on hover                    |
| `--select-border-color-hover`        | `#0056b3`     | Border color on hover                  |
| `--select-background-color-disabled` | `#e0e0e0`     | Background color when disabled         |
| `--select-text-color-disabled`       | `#a1a1a1`     | Text color when disabled               |
| `--select-border-color-disabled`     | `#d6d6d6`     | Border color when disabled             |

## Accessibility

The `Select` component is a semantic `<select>` element. It supports native keyboard navigation and screen reader behaviors. When `disabled`, it becomes non-interactive and reflects the appropriate visual state.

## Best Practices

- Wrap `option` elements inside the `Select` using plain JSX or mapped values.
- Use BEM-style modifier classes (e.g., `.select--compact`, `.select--large`) to theme variations with custom properties.
- Avoid hardcoded styles; prefer theming via CSS variables for flexibility.

For global styling strategies, refer to the shared [Modifiers](../../../../docs/modifiers.md) guide.
