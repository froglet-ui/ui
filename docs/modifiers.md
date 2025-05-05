# Modifier Classes and Global Styling

Froglet UI components use CSS Custom Properties to support theming and styling. While you can apply styles directly to any class, we recommend organizing styles using BEM-style modifier classes for consistency and maintainability.

## Recommended Approach

Although not required, we recommend defining BEM-style modifier classes at the global level to manage consistent visual themes. This structure helps provide predictable styling hooks without requiring changes to the component's internals.

For example:

```css
.input--primary {
  --input-border-color: #007bff;
  --input-background-color: #e6f0ff;
  --input-text-color: #003366;
}

.button--secondary {
  --button-background-color: #f0f0f0;
  --button-text-color: #333333;
}
```

These modifier classes are typically applied alongside the base component class:

```tsx
<Input className="input--primary" />
<Button className="button--secondary" />
```

By centralizing modifier styles, you maintain a clean separation between structural component code and design intent, making your system more scalable.

## Utility Compatibility

You can also use utility classes or custom Tailwind variants to accomplish similar goals, especially in hybrid design systems.
