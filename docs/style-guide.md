# Froglet Style Guide

This document defines the Froglet brand's color palette, design decisions, and reference token implementations for each component. It is the source of truth for how Froglet themes its own component library.

For how tokens are named and structured, see [CSS Composition](./css-composition.md).
For how modifier classes work, see [Modifier Classes](./modifiers.md).

---

## Color Palette

| Role      | Base      | Hover     | Focus Ring | Disabled BG   | Disabled Text |
| --------- | --------- | --------- | ---------- | ------------- | ------------- |
| Primary   | `#2e8b57` | `#245f45` | `#5eba87`  | `#d3e9d7`     | `#7a9a7d`     |
| Secondary | `#7c3aed` | `#6d28d9` | `#a78bfa`  | `#ede9fe`     | `#a78bfa`     |
| Neutral   | `#4b5563` | —         | `#9ca3af`  | `transparent` | `#d1d5db`     |
| Danger    | `#dc2626` | `#b91c1c` | `#f87171`  | `#fee2e2`     | `#fca5a5`     |

### Neutral borders

| Use             | Value     |
| --------------- | --------- |
| Default border  | `#d1d5db` |
| Hover border    | `#9ca3af` |
| Disabled border | `#e5e7eb` |

### Text on dark backgrounds

All base colors above pass WCAG AA contrast against `#ffffff`.

---

## Shape

All interactive components share a consistent shape language.

| Token              | Value       |
| ------------------ | ----------- |
| Border radius      | `6px`       |
| Border width       | `2px`       |
| Padding (standard) | `10px 20px` |
| Font size          | `1rem`      |

---

## Component Token Reference

### Button

#### Primary

```css
.button--primary {
  --button-background-color: #2e8b57;
  --button-text-color: #ffffff;
  --button-border-color: #2e8b57;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #245f45;
  --button-text-color-hover: #ffffff;

  --button-outline-width-focus: 2px;
  --button-outline-color-focus: #5eba87;
  --button-outline-offset-focus: 3px;

  --button-background-color-disabled: #d3e9d7;
  --button-text-color-disabled: #7a9a7d;
  --button-border-color-disabled: #d3e9d7;
}
```

#### Secondary

```css
.button--secondary {
  --button-background-color: #7c3aed;
  --button-text-color: #ffffff;
  --button-border-color: #7c3aed;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #6d28d9;
  --button-text-color-hover: #ffffff;

  --button-outline-width-focus: 2px;
  --button-outline-color-focus: #a78bfa;
  --button-outline-offset-focus: 3px;

  --button-background-color-disabled: #ede9fe;
  --button-text-color-disabled: #a78bfa;
  --button-border-color-disabled: #ede9fe;
}
```

#### Tertiary

```css
.button--tertiary {
  --button-background-color: transparent;
  --button-text-color: #4b5563;
  --button-border-color: #d1d5db;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #f3f4f6;
  --button-text-color-hover: #111827;

  --button-outline-width-focus: 2px;
  --button-outline-color-focus: #9ca3af;
  --button-outline-offset-focus: 3px;

  --button-background-color-disabled: transparent;
  --button-text-color-disabled: #d1d5db;
  --button-border-color-disabled: #e5e7eb;
}
```

#### Danger

```css
.button--danger {
  --button-background-color: #dc2626;
  --button-text-color: #ffffff;
  --button-border-color: #dc2626;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #b91c1c;
  --button-text-color-hover: #ffffff;

  --button-outline-width-focus: 2px;
  --button-outline-color-focus: #f87171;
  --button-outline-offset-focus: 3px;

  --button-background-color-disabled: #fee2e2;
  --button-text-color-disabled: #fca5a5;
  --button-border-color-disabled: #fee2e2;
}
```

### Checkbox

```css
.checkbox--froglet {
  --checkbox-size: 1.125rem;
  --checkbox-border-width: 2px;
  --checkbox-border-style: solid;
  --checkbox-border-color: #2e8b57;
  --checkbox-border-radius: 4px;
  --checkbox-background-color: #ffffff;

  --checkbox-border-color-hover: #245f45;
  --checkbox-background-color-hover: #f0f7f4;

  --checkbox-outline-width-focus: 2px;
  --checkbox-outline-color-focus: #5eba87;
  --checkbox-outline-offset-focus: 2px;

  --checkbox-border-color-checked: #2e8b57;
  --checkbox-background-color-checked: #2e8b57;
  --checkbox-checkmark-color-checked: #ffffff;

  --checkbox-border-color-disabled: #d3e9d7;
  --checkbox-background-color-disabled: #f4f9f6;
  --checkbox-checkmark-color-disabled: #7a9a7d;
}
```

### Input

```css
.input--froglet {
  --input-border-width: 2px;
  --input-border-style: solid;
  --input-border-color: #d1d5db;
  --input-border-radius: 6px;
  --input-padding: 10px 16px;
  --input-font-size: 1rem;
  --input-text-color: #111827;
  --input-background-color: #ffffff;
  --input-text-color-placeholder: #6b7280;

  --input-border-color-hover: #9ca3af;
  --input-background-color-hover: #f9fafb;

  --input-border-color-focus: #2e8b57;
  --input-outline-width-focus: 2px;
  --input-outline-color-focus: #5eba87;
  --input-outline-offset-focus: 2px;

  --input-border-color-disabled: #e5e7eb;
  --input-text-color-disabled: #d1d5db;
  --input-background-color-disabled: #f9fafb;

  --input-border-color-invalid: #dc2626;
}
```

### Link

```css
.link--froglet {
  --link-text-color: #2e8b57;
  --link-text-decoration: underline;

  --link-text-color-hover: #245f45;
  --link-text-decoration-hover: none;

  --link-outline-width-focus: 2px;
  --link-outline-color-focus: #5eba87;
  --link-outline-offset-focus: 3px;
  --link-text-decoration-focus: underline;

  --link-text-color-visited: #7c3aed;
}
```

---

_Additional component token references will be added here as each component is completed._
