import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@froglet/ui";
import "../assets/css/select.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Select/README.md?raw";

// Strip the leading `# Select` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="one">Option One</option>
        <option value="two">Option Two</option>
      </>
    ),
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI select. No CSS custom properties are set — apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="one">Option One</option>
        <option value="two">Option Two</option>
      </>
    ),
    className: "select--froglet",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet neutral border and primary focus ring.

\`\`\`css
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
\`\`\``,
      },
    },
  },
};
