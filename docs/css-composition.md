# CSS Composition

A guide to customizing Froglet UI components using CSS Custom Properties, inspired by Brad Frost's [The Many Faces of Themeable Design Systems](https://bradfrost.com/blog/post/the-many-faces-of-themeable-design-systems/).

## Naming Convention

Components use a structured naming pattern for custom properties:

```css
--{component}-{CSS-property}
```

Example:
```css
--button-background-color
```

### Component States

State-specific properties use a state prefix:

```css
--button-disabled-background-color
```

### Naming Exception

While most properties follow our standard naming pattern, the CSS `color` property has a community-standard exception. We use `--text-color` instead of `--color`:

```css
.button {
  --button-text-color: blue;
  color: var(--button-text-color);
}
```

This is the only deviation from our standard naming convention.
