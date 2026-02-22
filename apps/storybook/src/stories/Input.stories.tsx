import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@froglet/ui";
import "../assets/css/input.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Input/README.md?raw";

// Strip the leading `# Input` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
  argTypes: {
    type: {
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
      ],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI input. No CSS custom properties are set — apply a modifier class to theme it. Use the `type` control to test email, password, search, number, and other variants.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    placeholder: "Enter text",
    className: "input--froglet",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet neutral border and primary focus ring. Use the \`type\` control to test all text-type variants — email, password, search, number, date, and more.

\`\`\`css
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
\`\`\``,
      },
    },
  },
};
