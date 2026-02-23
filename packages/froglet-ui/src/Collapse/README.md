# Collapse

A brandless disclosure component built on the native `<details>` and `<summary>` elements. Open/close behavior is handled entirely by the browser — no JavaScript required. Two components compose together: `Collapse` wraps `<details>` and `CollapseSummary` wraps `<summary>`.

## Usage

```tsx
import { Collapse, CollapseSummary } from "@froglet/ui";

<Collapse>
  <CollapseSummary>What is Froglet?</CollapseSummary>
  <p>Froglet is a brandless React component library.</p>
</Collapse>;
```

Open by default:

```tsx
<Collapse open>
  <CollapseSummary>Always starts open</CollapseSummary>
  <p>Content visible on initial render.</p>
</Collapse>
```

Apply modifier classes to theme both components:

```tsx
<Collapse className="collapse--brand">
  <CollapseSummary className="collapse-summary--brand">Toggle</CollapseSummary>
  <p>Content here.</p>
</Collapse>
```

## Props

### Collapse

| Prop        | Type                                 | Description                                                        |
| ----------- | ------------------------------------ | ------------------------------------------------------------------ |
| `open`      | `boolean`                            | Whether the disclosure starts open. Maps to the native attribute.  |
| `children`  | `ReactNode`                          | Content. Include a `<CollapseSummary>` as the first child.         |
| `className` | `string`                             | Additional CSS classes. Use to apply a token block (see Variants). |
| `ref`       | `React.Ref<HTMLDetailsElement>`      | Forwarded to the underlying `<details>` element.                   |
| `...props`  | `HTMLAttributes<HTMLDetailsElement>` | All standard HTML details attributes.                              |

### CollapseSummary

| Prop        | Type                          | Description                                                        |
| ----------- | ----------------------------- | ------------------------------------------------------------------ |
| `children`  | `ReactNode`                   | Trigger text or content.                                           |
| `className` | `string`                      | Additional CSS classes. Use to apply a token block (see Variants). |
| `ref`       | `React.Ref<HTMLElement>`      | Forwarded to the underlying `<summary>` element.                   |
| `...props`  | `HTMLAttributes<HTMLElement>` | All standard HTML element attributes.                              |

## CSS Custom Properties

### Collapse (`.collapse`)

| Token                         | Default       | Description                                   |
| ----------------------------- | ------------- | --------------------------------------------- |
| `--collapse-border-width`     | `0`           | Border width.                                 |
| `--collapse-border-style`     | `solid`       | Border style.                                 |
| `--collapse-border-color`     | —             | Border color. Bare var; no border when unset. |
| `--collapse-border-radius`    | `0`           | Corner rounding.                              |
| `--collapse-padding`          | `0`           | Outer spacing.                                |
| `--collapse-background-color` | `transparent` | Background fill.                              |

### CollapseSummary (`.collapse-summary`)

| Token                                       | Default               | Description                                                                                       |
| ------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| `--collapse-summary-font-family`            | `inherit`             | Font family.                                                                                      |
| `--collapse-summary-font-size`              | `inherit`             | Font size.                                                                                        |
| `--collapse-summary-font-weight`            | `inherit`             | Font weight.                                                                                      |
| `--collapse-summary-text-color`             | —                     | Text color. Bare var; inherits surrounding `color` when unset.                                    |
| `--collapse-summary-padding`                | `0`                   | Internal padding of the trigger row.                                                              |
| `--collapse-summary-cursor`                 | `pointer`             | Cursor over the trigger.                                                                          |
| `--collapse-summary-background-color`       | `transparent`         | Trigger background.                                                                               |
| `--collapse-summary-background-color-hover` | `transparent`         | Trigger background on hover.                                                                      |
| `--collapse-summary-text-color-hover`       | —                     | Trigger text color on hover.                                                                      |
| `--collapse-summary-outline-width-focus`    | `2px`                 | Focus ring width.                                                                                 |
| `--collapse-summary-outline-color-focus`    | `currentColor`        | Focus ring color.                                                                                 |
| `--collapse-summary-outline-offset-focus`   | `2px`                 | Focus ring offset.                                                                                |
| `--collapse-summary-marker-content`         | `"▶"`                 | Marker character in the closed state.                                                             |
| `--collapse-summary-marker-content-open`    | —                     | Marker character in the open state. Falls back to `--collapse-summary-marker-content` when unset. |
| `--collapse-summary-marker-color`           | `currentColor`        | Marker color.                                                                                     |
| `--collapse-summary-marker-font-size`       | `0.75em`              | Marker size relative to summary text.                                                             |
| `--collapse-summary-marker-gap`             | `0.5rem`              | Space between marker and label text.                                                              |
| `--collapse-summary-marker-transition`      | `transform 0.2s ease` | Transition applied to the marker (controls rotation animation).                                   |
| `--collapse-summary-marker-transform`       | `rotate(0deg)`        | Transform applied to the marker in the closed state.                                              |
| `--collapse-summary-marker-transform-open`  | `rotate(90deg)`       | Transform applied to the marker in the open state. Set to `rotate(0deg)` to disable rotation.     |

The native `<summary>` disclosure triangle is suppressed and replaced with a `::before` pseudo-element. By default the marker rotates 90° on open — no JavaScript required. To use different characters per state instead: set `--collapse-summary-marker-content`, `--collapse-summary-marker-content-open`, and `--collapse-summary-marker-transform-open: rotate(0deg)` to disable rotation. To remove the marker entirely: `--collapse-summary-marker-content: ""`.

## Variants

Variants are not built into the components. Apply CSS classes that set the appropriate tokens for your brand.

```tsx
<Collapse className="collapse--brand">
  <CollapseSummary className="collapse-summary--brand">Toggle</CollapseSummary>
  <p>Content here.</p>
</Collapse>
```

See the [Froglet Style Guide](../../../../docs/style-guide.md) for a reference implementation, or [Modifier Classes](../../../../docs/modifiers.md) for the general pattern.

## Accessibility

- `<details>` and `<summary>` are native HTML disclosure elements — no ARIA attributes needed.
- The browser handles `aria-expanded` on the `<summary>` automatically.
- Keyboard navigation is built in: `Enter` or `Space` on a focused `<summary>` toggles the panel.
- Screen readers announce the summary text and expanded/collapsed state natively.
- Do not place interactive elements (links, buttons) inside `<CollapseSummary>` — the entire summary is already a disclosure button.
