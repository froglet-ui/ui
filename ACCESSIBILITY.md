# Accessibility

`@froglet/ui` targets **WCAG 2.1 Level AA** conformance for all components.

## Commitments

- **Keyboard navigation** — every interactive component is fully operable by keyboard alone
- **Focus management** — visible focus indicators on all interactive elements; focus is never lost or trapped unintentionally
- **ARIA semantics** — native HTML semantics are preferred; ARIA roles, states, and properties are added only where native semantics are insufficient
- **Color contrast** — the library ships without color opinions; consumer-applied token sets should meet a minimum 4.5:1 contrast ratio for normal text and 3:1 for large text and UI components
- **Screen reader compatibility** — components are tested with VoiceOver (macOS/iOS) and NVDA (Windows)

## Scope

These commitments apply to the `@froglet/ui` component library. The Storybook demo site and froglet.io docs site are best-effort and may not meet the same standard.

## Testing

- **Automated** — axe-core accessibility rules are exercised in Storybook; component tests use `@testing-library/react`, which encourages accessible queries by default
- **Manual** — interactive components (Button, Checkbox, Dialog, Select, Switch, Tabs, etc.) are tested with keyboard-only navigation and VoiceOver

## Reporting Issues

Found an accessibility bug? Please [open a GitHub issue](https://github.com/froglet-ui/ui/issues) with the `[a11y]` label. Include:

- The component name and version
- The assistive technology and browser affected
- Steps to reproduce
- Expected vs. actual behavior
