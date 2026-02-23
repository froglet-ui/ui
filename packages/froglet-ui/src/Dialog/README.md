# Dialog

A compound component for modal dialogs. Built on the native `<dialog>` element — `showModal()` provides a native focus trap, Escape key handling, and `::backdrop` support. All visual styling is driven by CSS custom properties.

## Usage

### Uncontrolled

```tsx
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@froglet/ui";

<Dialog>
  <DialogTrigger>
    <button type="button">Open dialog</button>
  </DialogTrigger>
  <DialogContent aria-label="Example dialog">
    <p>Dialog content goes here.</p>
    <DialogClose>Close</DialogClose>
  </DialogContent>
</Dialog>;
```

### Controlled

```tsx
const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger>
    <button type="button">Open</button>
  </DialogTrigger>
  <DialogContent aria-label="Controlled dialog">
    <p>Content.</p>
    <DialogClose>Close</DialogClose>
  </DialogContent>
</Dialog>;
```

## Props

### `DialogProps`

| Prop           | Type                      | Default | Description                         |
| -------------- | ------------------------- | ------- | ----------------------------------- |
| `defaultOpen`  | `boolean`                 | `false` | Uncontrolled initial open state.    |
| `open`         | `boolean`                 | —       | Controlled open state.              |
| `onOpenChange` | `(open: boolean) => void` | —       | Called when the open state changes. |
| `children`     | `ReactNode`               | —       | DialogTrigger and DialogContent.    |

`Dialog` renders no DOM element — it is a context provider only.

### `DialogTriggerProps`

| Prop       | Type           | Default | Description                                                       |
| ---------- | -------------- | ------- | ----------------------------------------------------------------- |
| `children` | `ReactElement` | —       | A single element whose `onClick` is augmented to open the dialog. |

`DialogTrigger` uses `cloneElement` — pass any focusable element (e.g. `<button>`, `<Button>`). No DOM wrapper is added.

### `DialogContentProps`

Extends `HTMLAttributes<HTMLDialogElement>`.

| Prop        | Type                           | Default | Description                                         |
| ----------- | ------------------------------ | ------- | --------------------------------------------------- |
| `className` | `string`                       | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLDialogElement>` | —       | Forwarded to the underlying `<dialog>` element.     |

Pass `aria-label` or `aria-labelledby` directly on `DialogContent` to label the dialog for screen readers.

### `DialogCloseProps`

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop        | Type                           | Default | Description                                         |
| ----------- | ------------------------------ | ------- | --------------------------------------------------- |
| `className` | `string`                       | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLButtonElement>` | —       | Forwarded to the underlying `<button>` element.     |

## CSS Custom Properties

| Token                           | Default            | Description                               |
| ------------------------------- | ------------------ | ----------------------------------------- |
| `--dialog-padding`              | `1.5rem`           | Panel internal spacing.                   |
| `--dialog-max-width`            | `32rem`            | Maximum panel width.                      |
| `--dialog-background-color`     | `Canvas`           | Panel background color.                   |
| `--dialog-color`                | `CanvasText`       | Panel text color.                         |
| `--dialog-border-width`         | `0`                | Panel border width.                       |
| `--dialog-border-style`         | `solid`            | Panel border style.                       |
| `--dialog-border-color`         | —                  | Panel border color. No border when unset. |
| `--dialog-border-radius`        | `0`                | Panel corner rounding.                    |
| `--dialog-backdrop-color`       | `rgb(0 0 0 / 0.5)` | Backdrop overlay color.                   |
| `--dialog-close-padding`        | `0.5rem 1rem`      | Close button padding.                     |
| `--dialog-close-border-width`   | `1px`              | Close border width.                       |
| `--dialog-close-border-style`   | `solid`            | Close border style.                       |
| `--dialog-close-border-color`   | `currentColor`     | Close border color.                       |
| `--dialog-close-border-radius`  | `0`                | Close button corner rounding.             |
| `--dialog-outline-width-focus`  | `2px`              | Focus ring width (close button).          |
| `--dialog-outline-color-focus`  | `currentColor`     | Focus ring color.                         |
| `--dialog-outline-offset-focus` | `2px`              | Focus ring offset.                        |

## Accessibility

- `DialogContent` renders a native `<dialog>` element, which provides `role="dialog"` automatically.
- `showModal()` creates a native focus trap — keyboard focus is locked inside the dialog while open.
- Pressing Escape fires a native `close` event on the dialog element, which this component handles by calling `setOpen(false)`.
- Provide `aria-label` or `aria-labelledby` on `DialogContent` to label the dialog for screen readers.
- The `::backdrop` pseudo-element is styled via `--dialog-backdrop-color`.

## Variants

Variants are not built into the components. Apply CSS classes that set the appropriate tokens.

```tsx
<Dialog>
  <DialogTrigger>
    <Button className="button--primary">Open</Button>
  </DialogTrigger>
  <DialogContent className="dialog--froglet" aria-label="Example">
    <DialogClose className="dialog__close--froglet">Close</DialogClose>
  </DialogContent>
</Dialog>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation.
