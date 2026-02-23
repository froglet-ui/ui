import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@froglet/ui";
import "../assets/css/alert.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Alert/README.md?raw";

// Strip the leading `# Alert` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Alert>Your changes have been saved.</Alert>,
  parameters: {
    docs: {
      description: {
        story:
          'The base Alert with no modifier class applied. Renders with a light gray background (`#f9fafb`), 1px border (`#e5e7eb`), 4px radius, and `0.75rem 1rem` padding by default — enough to look like a notification without any configuration. The `role="alert"` attribute marks it as an ARIA live region. Override tokens or apply a modifier class for severity-specific treatment.',
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: "36rem",
      }}
    >
      <Alert className="alert--info">
        <strong>Info:</strong> Your session will expire in 10 minutes.
      </Alert>
      <Alert className="alert--success">
        <strong>Success:</strong> Your changes have been saved.
      </Alert>
      <Alert className="alert--warning">
        <strong>Warning:</strong> This action cannot be undone.
      </Alert>
      <Alert className="alert--error">
        <strong>Error:</strong> Something went wrong. Please try again.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Four severity variants — info, success, warning, and error — each using a separate modifier class that sets color tokens. All share the same padding, border, and border-radius values.

\`\`\`css
.alert--success {
  --alert-background-color: #f0fdf4;
  --alert-text-color: #166534;
  --alert-border-width: 1px;
  --alert-border-style: solid;
  --alert-border-color: #bbf7d0;
  --alert-border-radius: 6px;
  --alert-padding: 0.75rem 1rem;
}
\`\`\``,
      },
    },
  },
};
