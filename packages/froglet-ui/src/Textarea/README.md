# Textarea

A brandless textarea. All visual styling is driven by CSS custom properties. Accepts all native `<textarea>` attributes.

## Usage

```tsx
import { Textarea } from "@froglet/ui";

<Textarea placeholder="Enter your message here..." />;
```

## Props

| Prop        | Type                                          | Default | Description                                         |
| ----------- | --------------------------------------------- | ------- | --------------------------------------------------- |
| `className` | `string`                                      | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLTextAreaElement>`              | —       | Forwarded to the underlying `<textarea>` element.   |
| `...props`  | `TextareaHTMLAttributes<HTMLTextAreaElement>` | —       | All standard HTML textarea attributes.              |

## CSS Custom Properties

| Property                               | Default          | Description                |
| -------------------------------------- | ---------------- | -------------------------- |
| `--textarea-min-height`                | `120px`          | Minimum height             |
| `--textarea-padding`                   | `0.5rem 0.75rem` | Internal padding           |
| `--textarea-border-width`              | `1px`            | Border width               |
| `--textarea-border-style`              | `solid`          | Border style               |
| `--textarea-border-color`              | —                | Border color               |
| `--textarea-border-radius`             | `0`              | Border radius              |
| `--textarea-font-size`                 | `1rem`           | Font size                  |
| `--textarea-line-height`               | `1.5`            | Line height                |
| `--textarea-text-color`                | —                | Text color                 |
| `--textarea-background-color`          | —                | Background color           |
| `--textarea-border-color-hover`        | —                | Border color on hover      |
| `--textarea-background-color-hover`    | —                | Background on hover        |
| `--textarea-border-color-focus`        | —                | Border color when focused  |
| `--textarea-outline-width-focus`       | `2px`            | Focus ring width           |
| `--textarea-outline-color-focus`       | `currentColor`   | Focus ring color           |
| `--textarea-outline-offset-focus`      | `2px`            | Focus ring offset          |
| `--textarea-border-color-disabled`     | —                | Border color when disabled |
| `--textarea-text-color-disabled`       | —                | Text color when disabled   |
| `--textarea-background-color-disabled` | —                | Background when disabled   |

## Variants

Apply a modifier class to theme the textarea:

```css
.textarea--brand {
  --textarea-border-color: #d1d5db;
  --textarea-border-color-focus: #2e8b57;
  --textarea-outline-color-focus: #5eba87;
  --textarea-text-color: #111827;
  --textarea-background-color: #ffffff;
}
```

See [style-guide.md](../../../../docs/style-guide.md) for the Froglet brand token reference.
