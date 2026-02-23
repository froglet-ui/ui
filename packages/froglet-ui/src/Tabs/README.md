# Tabs

A compound component for tabbed navigation. State is managed internally — no external state machine required. All visual styling is driven by CSS custom properties.

## Usage

```tsx
import { Tabs, TabList, Tab, TabPanel } from "@froglet/ui";

<Tabs defaultValue="account">
  <TabList>
    <Tab value="account">Account</Tab>
    <Tab value="password">Password</Tab>
    <Tab value="notifications">Notifications</Tab>
  </TabList>
  <TabPanel value="account">
    <p>Account settings go here.</p>
  </TabPanel>
  <TabPanel value="password">
    <p>Password settings go here.</p>
  </TabPanel>
  <TabPanel value="notifications">
    <p>Notification preferences go here.</p>
  </TabPanel>
</Tabs>;
```

### Controlled

```tsx
const [active, setActive] = useState("account");

<Tabs value={active} onValueChange={setActive}>
  ...
</Tabs>;
```

## Props

### `TabsProps`

| Prop            | Type                        | Default | Description                                         |
| --------------- | --------------------------- | ------- | --------------------------------------------------- |
| `defaultValue`  | `string`                    | `""`    | Uncontrolled initial active tab value.              |
| `value`         | `string`                    | —       | Controlled active tab value.                        |
| `onValueChange` | `(value: string) => void`   | —       | Called when the active tab changes.                 |
| `className`     | `string`                    | —       | Additional CSS classes. Use to apply a token block. |
| `ref`           | `React.Ref<HTMLDivElement>` | —       | Forwarded to the underlying `<div>` element.        |

### `TabListProps`

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop        | Type                        | Default | Description                                         |
| ----------- | --------------------------- | ------- | --------------------------------------------------- |
| `className` | `string`                    | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLDivElement>` | —       | Forwarded to the underlying `<div>` element.        |

### `TabProps`

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop        | Type                           | Default | Description                                          |
| ----------- | ------------------------------ | ------- | ---------------------------------------------------- |
| `value`     | `string`                       | —       | **Required.** Identifies this tab. Match a TabPanel. |
| `className` | `string`                       | —       | Additional CSS classes. Use to apply a token block.  |
| `ref`       | `React.Ref<HTMLButtonElement>` | —       | Forwarded to the underlying `<button>` element.      |

### `TabPanelProps`

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop        | Type                        | Default | Description                                         |
| ----------- | --------------------------- | ------- | --------------------------------------------------- |
| `value`     | `string`                    | —       | **Required.** Identifies this panel. Match a Tab.   |
| `className` | `string`                    | —       | Additional CSS classes. Use to apply a token block. |
| `ref`       | `React.Ref<HTMLDivElement>` | —       | Forwarded to the underlying `<div>` element.        |

## CSS Custom Properties

| Token                                     | Default        | Description                                |
| ----------------------------------------- | -------------- | ------------------------------------------ |
| `--tabs-list-border-bottom-width`         | `1px`          | List bottom border width.                  |
| `--tabs-list-border-bottom-color`         | `currentColor` | List bottom border color.                  |
| `--tabs-list-background-color`            | —              | List background. No background when unset. |
| `--tabs-list-gap`                         | `0`            | Gap between tab buttons.                   |
| `--tabs-list-padding`                     | `0`            | Padding inside the tab list.               |
| `--tabs-tab-padding`                      | `0.5rem 1rem`  | Tab button padding.                        |
| `--tabs-tab-font-size`                    | `1rem`         | Tab font size.                             |
| `--tabs-tab-font-weight`                  | `400`          | Tab font weight (inactive).                |
| `--tabs-tab-font-weight-selected`         | `600`          | Active tab font weight.                    |
| `--tabs-tab-color`                        | `inherit`      | Tab text color (inactive).                 |
| `--tabs-tab-color-selected`               | `currentColor` | Active tab text color.                     |
| `--tabs-tab-color-hover`                  | `inherit`      | Tab text color on hover.                   |
| `--tabs-tab-color-disabled`               | —              | Disabled tab text color.                   |
| `--tabs-tab-background-color`             | `transparent`  | Tab background (inactive).                 |
| `--tabs-tab-background-color-selected`    | `transparent`  | Active tab background.                     |
| `--tabs-tab-background-color-hover`       | `transparent`  | Tab background on hover.                   |
| `--tabs-tab-border-bottom-width`          | `2px`          | Active indicator height.                   |
| `--tabs-tab-border-bottom-color-selected` | `currentColor` | Active indicator color.                    |
| `--tabs-tab-outline-width-focus`          | `2px`          | Focus outline width.                       |
| `--tabs-tab-outline-color-focus`          | `currentColor` | Focus outline color.                       |
| `--tabs-tab-outline-offset-focus`         | `2px`          | Focus outline offset.                      |
| `--tabs-tab-opacity-disabled`             | `0.4`          | Disabled tab opacity.                      |
| `--tabs-panel-padding`                    | `1rem 0`       | Panel padding.                             |

### Notes

- The active tab's bottom border overlaps the list's bottom border via `margin-bottom: calc(-1 * var(--tabs-list-border-bottom-width, 1px))`. If you change `--tabs-list-border-bottom-width`, the overlap adjusts automatically.
- Inactive `TabPanel` elements receive the native `hidden` attribute, which removes them from the accessibility tree. Content inside hidden panels is not focusable or announced by screen readers.
- Keyboard navigation follows the WAI-ARIA Tabs pattern: ArrowRight/ArrowLeft move between tabs, Home/End jump to first/last.

## Variants

### Froglet

```css
.tabs--froglet {
  --tabs-list-border-bottom-color: #d1d5db;
  --tabs-tab-color: #6b7280;
  --tabs-tab-color-selected: #2e8b57;
  --tabs-tab-color-hover: #111827;
  --tabs-tab-background-color-hover: #f3f4f6;
  --tabs-tab-border-bottom-color-selected: #2e8b57;
  --tabs-tab-font-weight-selected: 600;
  --tabs-tab-outline-width-focus: 2px;
  --tabs-tab-outline-color-focus: #5eba87;
  --tabs-tab-outline-offset-focus: 3px;
  --tabs-panel-padding: 1rem 0;
}
```
