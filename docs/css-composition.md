# CSS Composition

This guide outlines how components in Froglet UI expose a **CSS Custom  
Property API**, allowing users to customize styles without modifying  
component code. Our approach follows Brad Frost’s principles from  
[The Many Faces of Themeable Design Systems](https://bradfrost.com/blog/post/the-many-faces-of-themeable-design-systems/).

## Naming Convention

Each component defines its styles using a structured custom property  
naming pattern: --{component}-{CSS-property}

For example, a button’s background color is exposed as:

```css
--button-background-color
```

This approach ensures consistency and flexibility, enabling easy  
overrides for theming and customization.

### Component States

States like "disabled" are prefixed to the relevant CSS property to ensure  
clear, distinct overrides. For example, the background color for a disabled  
button is defined as:

```css
--button-disabled-background-color
```

This structure allows for easy customization of components in different states.

### Exceptions

Following general community concensus, we use `--text-color` for the CSS color
property. For example:

```css
.button {
  --button-text-color: blue;
  color: var(--button-text-color);
}
```
