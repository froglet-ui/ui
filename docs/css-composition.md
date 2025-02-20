# CSS Composition

A guide to customizing Froglet UI components using CSS Custom Properties, inspired by Brad Frost's [The Many Faces of Themeable Design Systems](https://bradfrost.com/blog/post/the-many-faces-of-themeable-design-systems/). 
We are taking general naming guidance from [Nathan Curtis](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676).

## Naming Convention

Components use a structured naming pattern for custom properties:

```css
--{component}-{CSS-property}-{modifier}
```

Example:

```css
--button-background-color
```

### Component States

State-specific properties act as a modifier and are added as a prefix:

```css
--button-background-color-disabled
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
