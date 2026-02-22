import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@froglet/ui";
import "../assets/css/label.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Label/README.md?raw";

// Strip the leading `# Label` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email address",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Label. No CSS custom properties are set — inherits surrounding text styles. Apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    children: "Email address",
    className: "label--froglet",
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with Froglet typography tokens.

\`\`\`css
.label--froglet {
  --label-font-size: 0.875rem;
  --label-font-weight: 500;
  --label-text-color: #111827;
}
\`\`\``,
      },
    },
  },
};

export const WithInput: Story = {
  args: {
    children: "Email address",
    className: "label--froglet",
    htmlFor: "email-demo",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.375rem",
          width: "20rem",
        }}
      >
        <Story />
        <input
          id="email-demo"
          type="email"
          placeholder="you@example.com"
          style={{
            border: "2px solid #d1d5db",
            borderRadius: "6px",
            padding: "10px 16px",
            fontSize: "1rem",
            fontFamily: "inherit",
          }}
        />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Label associated with an input via `htmlFor`. Clicking the label focuses the input. The `<input>` here is plain HTML to keep the story focused on Label.",
      },
    },
  },
};
