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

### Alert

```css
.alert--info {
  --alert-background-color: #eff6ff;
  --alert-text-color: #1e40af;
  --alert-border-width: 1px;
  --alert-border-style: solid;
  --alert-border-color: #bfdbfe;
  --alert-border-radius: 6px;
  --alert-padding: 0.75rem 1rem;
}

.alert--success {
  --alert-background-color: #f0fdf4;
  --alert-text-color: #166534;
  --alert-border-width: 1px;
  --alert-border-style: solid;
  --alert-border-color: #bbf7d0;
  --alert-border-radius: 6px;
  --alert-padding: 0.75rem 1rem;
}

.alert--warning {
  --alert-background-color: #fefce8;
  --alert-text-color: #854d0e;
  --alert-border-width: 1px;
  --alert-border-style: solid;
  --alert-border-color: #fde047;
  --alert-border-radius: 6px;
  --alert-padding: 0.75rem 1rem;
}

.alert--error {
  --alert-background-color: #fef2f2;
  --alert-text-color: #991b1b;
  --alert-border-width: 1px;
  --alert-border-style: solid;
  --alert-border-color: #fecaca;
  --alert-border-radius: 6px;
  --alert-padding: 0.75rem 1rem;
}
```

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

### Badge

```css
.badge--froglet {
  --badge-background-color: #f3f4f6;
  --badge-text-color: #374151;
  --badge-border-radius: 9999px;
  --badge-font-size: 0.75rem;
  --badge-font-weight: 600;
  --badge-padding: 0.125rem 0.5rem;
}
```

### Box

```css
.box--froglet {
  --box-border-width: 1px;
  --box-border-style: solid;
  --box-border-color: #d1d5db;
  --box-border-radius: 6px;
  --box-background-color: #ffffff;
  --box-padding: 1rem;
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
  --checkbox-outline-offset-focus: 3px;

  --checkbox-border-color-checked: #2e8b57;
  --checkbox-background-color-checked: #2e8b57;
  --checkbox-checkmark-color-checked: #ffffff;

  --checkbox-border-color-disabled: #d3e9d7;
  --checkbox-background-color-disabled: #f0f7f4;
  --checkbox-checkmark-color-disabled: #7a9a7d;
}
```

### Collapse

```css
.collapse--froglet {
  --collapse-border-width: 1px;
  --collapse-border-style: solid;
  --collapse-border-color: #d1d5db;
  --collapse-border-radius: 6px;
  --collapse-background-color: #ffffff;
}

.collapse-summary--froglet {
  --collapse-summary-font-weight: 500;
  --collapse-summary-text-color: #111827;
  --collapse-summary-padding: 0.75rem 1rem;
  --collapse-summary-background-color: #ffffff;
  --collapse-summary-background-color-hover: #f3f4f6;
  --collapse-summary-outline-width-focus: 2px;
  --collapse-summary-outline-color-focus: #5eba87;
  --collapse-summary-outline-offset-focus: 2px;
  --collapse-summary-marker-content: "+";
  --collapse-summary-marker-content-open: "−";
  --collapse-summary-marker-font-size: 1em;
  --collapse-summary-marker-transform-open: rotate(0deg);
}
```

### Divider

```css
.divider--froglet {
  --divider-border-color: #d1d5db;
  --divider-border-width: 1px;
  --divider-border-style: solid;
}
```

### Label

```css
.label--froglet {
  --label-font-size: 0.875rem;
  --label-font-weight: 500;
  --label-text-color: #111827;
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

### Progress

```css
.progress--primary {
  --progress-fill-color: #2e8b57;
  --progress-background-color: #f0f7f4;
  --progress-border-radius: 6px;
}

.progress--secondary {
  --progress-fill-color: #7c3aed;
  --progress-background-color: #f3f4f6;
  --progress-border-radius: 6px;
}

.progress--neutral {
  --progress-fill-color: #4b5563;
  --progress-background-color: #f3f4f6;
  --progress-border-radius: 6px;
}

.progress--danger {
  --progress-fill-color: #dc2626;
  --progress-background-color: #fee2e2;
  --progress-border-radius: 6px;
}
```

### Radio

```css
.radio--froglet {
  --radio-size: 1.125rem;
  --radio-border-width: 2px;
  --radio-border-style: solid;
  --radio-border-color: #2e8b57;
  --radio-border-radius: 50%;
  --radio-background-color: #ffffff;

  --radio-border-color-hover: #245f45;
  --radio-background-color-hover: #f0f7f4;

  --radio-outline-width-focus: 2px;
  --radio-outline-color-focus: #5eba87;
  --radio-outline-offset-focus: 3px;

  --radio-border-color-checked: #2e8b57;
  --radio-background-color-checked: #2e8b57;
  --radio-dot-color-checked: #ffffff;

  --radio-border-color-disabled: #d3e9d7;
  --radio-background-color-disabled: #f0f7f4;
  --radio-dot-color-disabled: #7a9a7d;
}
```

### Select

```css
.select--froglet {
  --select-border-width: 2px;
  --select-border-style: solid;
  --select-border-color: #d1d5db;
  --select-border-radius: 6px;
  --select-padding: 10px 16px;
  --select-font-size: 1rem;
  --select-text-color: #111827;
  --select-background-color: #ffffff;

  --select-border-color-hover: #9ca3af;
  --select-background-color-hover: #f9fafb;

  --select-border-color-focus: #2e8b57;
  --select-outline-width-focus: 2px;
  --select-outline-color-focus: #5eba87;
  --select-outline-offset-focus: 3px;

  --select-border-color-disabled: #e5e7eb;
  --select-text-color-disabled: #d1d5db;
  --select-background-color-disabled: #f9fafb;
}
```

### Switch

```css
.switch--froglet {
  --switch-background-color: #9ca3af;
  --switch-background-color-checked: #2e8b57;
  --switch-background-color-disabled: #e5e7eb;
  --switch-thumb-color: #ffffff;
  --switch-thumb-color-disabled: #ffffff;
  --switch-outline-width-focus: 2px;
  --switch-outline-color-focus: #5eba87;
  --switch-outline-offset-focus: 3px;
}
```

### Textarea

```css
.textarea--froglet {
  --textarea-border-width: 2px;
  --textarea-border-style: solid;
  --textarea-border-color: #d1d5db;
  --textarea-border-radius: 6px;
  --textarea-padding: 10px 16px;
  --textarea-font-size: 1rem;
  --textarea-line-height: 1.5;
  --textarea-text-color: #111827;
  --textarea-background-color: #ffffff;

  --textarea-border-color-hover: #9ca3af;
  --textarea-background-color-hover: #f9fafb;

  --textarea-border-color-focus: #2e8b57;
  --textarea-outline-width-focus: 2px;
  --textarea-outline-color-focus: #5eba87;
  --textarea-outline-offset-focus: 3px;

  --textarea-border-color-disabled: #e5e7eb;
  --textarea-text-color-disabled: #d1d5db;
  --textarea-background-color-disabled: #f9fafb;
}
```
