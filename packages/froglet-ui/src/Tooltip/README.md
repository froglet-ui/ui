# Tooltip

A compound component for contextual tooltip overlays. The tooltip is always present in the DOM — `aria-hidden` and CSS `display: none` control visibility. Uses `aria-describedby` to associate the tooltip with its trigger for screen readers. All visual styling is driven by CSS custom properties.

## Usage

### Uncontrolled

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from "@froglet/ui";

<Tooltip>
  <TooltipTrigger>
    <button type="button">Save</button>
  </TooltipTrigger>
  <TooltipContent>Saves your current work</TooltipContent>
</Tooltip>;
```

### Side placement

```tsx
<Tooltip>
  <TooltipTrigger>
    <button type="button">Help</button>
  </TooltipTrigger>
  <TooltipContent side="right">Opens the help panel</TooltipContent>
</Tooltip>
```

### Controlled

```tsx
const [open, setOpen] = useState(false);

<Tooltip open={open} onOpenChange={setOpen}>
  <TooltipTrigger>
    <button type="button">Info</button>
  </TooltipTrigger>
  <TooltipContent>Controlled tooltip</TooltipContent>
</Tooltip>;
```

## Props

### `TooltipProps`

| Prop           | Type                         | Default | Description                                         |
| -------------- | ---------------------------- | ------- | --------------------------------------------------- |
| `defaultOpen`  | `boolean`                    | `false` | Uncontrolled initial open state.                    |
| `open`         | `boolean`                    | —       | Controlled open state.                              |
| `onOpenChange` | `(open: boolean) => void`    | —       | Called when the open state changes.                 |
| `className`    | `string`                     | —       | Additional CSS classes. Use to apply a token block. |
| `ref`          | `React.Ref<HTMLSpanElement>` | —       | Forwarded to the underlying `<span>` element.       |

### `TooltipTriggerProps`

| Prop       | Type           | Default | Description                                   |
| ---------- | -------------- | ------- | --------------------------------------------- |
| `children` | `ReactElement` | —       | **Required.** A single React element to wrap. |

`TooltipTrigger` uses `cloneElement` — no DOM wrapper is added. The trigger element receives `aria-describedby`, `onMouseEnter`, `onMouseLeave`, `onFocus`, and `onBlur` via prop injection. Existing handlers on the child are composed (not overwritten).

### `TooltipContentProps`

Extends `HTMLAttributes<HTMLSpanElement>`.

| Prop        | Type                                     | Default | Description                                         |
| ----------- | ---------------------------------------- | ------- | --------------------------------------------------- |
| `side`      | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Placement relative to the trigger.                  |
| `className` | `string`                                 | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLSpanElement>`             | —       | Forwarded to the underlying `<span>` element.       |

## CSS Custom Properties

| Token                        | Default          | Description                                |
| ---------------------------- | ---------------- | ------------------------------------------ |
| `--tooltip-padding`          | `0.25rem 0.5rem` | Tooltip panel internal spacing.            |
| `--tooltip-font-size`        | `0.875rem`       | Tooltip text size.                         |
| `--tooltip-background-color` | `CanvasText`     | Tooltip background.                        |
| `--tooltip-color`            | `Canvas`         | Tooltip text color.                        |
| `--tooltip-border-radius`    | `0`              | Corner rounding.                           |
| `--tooltip-offset`           | `4px`            | Distance between trigger edge and tooltip. |

### Notes

- The `Tooltip` root renders a `<span>` with `position: relative`. The trigger and content must be immediate children (or descendants) of this wrapper for CSS positioning to work correctly.
- `TooltipContent` uses `position: absolute` — it may be clipped by an ancestor with `overflow: hidden`. Move the ancestor's overflow or restructure the layout if clipping occurs.
- Use a focusable element (`<button>`, `<a>`, `<input>`) as the `TooltipTrigger` child so keyboard users can trigger the tooltip via focus.

## Variants

Variants are not built into the components. Apply a CSS class to the `Tooltip` root or directly to `TooltipContent`.

```tsx
<Tooltip className="tooltip--froglet">
  <TooltipTrigger>
    <button type="button">Trigger</button>
  </TooltipTrigger>
  <TooltipContent>Tooltip text</TooltipContent>
</Tooltip>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation.

## Accessibility

- `TooltipContent` renders `role="tooltip"` and is linked to the trigger via `aria-describedby`.
- The tooltip text is always in the DOM so `aria-describedby` resolves correctly. `aria-hidden="true"` hides it from the accessibility tree when not shown.
- Show/hide is triggered on `mouseenter`/`mouseleave` and `focus`/`blur` — both pointer and keyboard users receive the tooltip.
- Use a natively focusable element as the `TooltipTrigger` child so keyboard users can activate the tooltip.
