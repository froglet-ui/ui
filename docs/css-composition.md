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

## CSS Property Groupings

Organizing CSS properties in a logical manner improves readability and maintainability. Below is a structured grouping of CSS properties based on their function and impact.

### 1. Positioning & Display

- `display`
- `position`
- `top`, `right`, `bottom`, `left`
- `z-index`
- `visibility`
- `overflow`

### 2. Box Model

- `width`, `min-width`, `max-width`
- `height`, `min-height`, `max-height`
- `margin`, `padding`
- `border`, `border-width`, `border-style`, `border-color`
- `box-sizing`
- `outline`, `outline-width`, `outline-style`, `outline-color`

### 3. Typography

- `font`, `font-family`, `font-size`, `font-weight`
- `line-height`, `letter-spacing`, `word-spacing`
- `color`
- `text-align`, `text-indent`, `text-decoration`, `text-transform`
- `white-space`, `word-wrap`

### 4. Visual Styles

- `background`, `background-color`, `background-image`, `background-position`, `background-size`, `background-repeat`
- `box-shadow`
- `opacity`
- `filter`
- `clip-path`

### 5. Flexbox & Grid

#### Flexbox

- `flex`, `flex-grow`, `flex-shrink`, `flex-basis`
- `justify-content`
- `align-items`, `align-self`, `align-content`
- `order`

#### Grid

- `grid`, `grid-template-columns`, `grid-template-rows`
- `grid-column`, `grid-row`
- `grid-gap`, `grid-auto-flow`

### 6. Animation & Transformations

- `transition`, `transition-property`, `transition-duration`, `transition-timing-function`
- `transform`, `transform-origin`
- `animation`, `animation-name`, `animation-duration`, `animation-timing-function`, `animation-iteration-count`

### 7. Miscellaneous

- `cursor`
- `pointer-events`
- `user-select`
- `content`
