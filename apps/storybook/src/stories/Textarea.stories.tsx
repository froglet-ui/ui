import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@froglet/ui";
import "../assets/css/textarea.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Textarea/README.md?raw";

// Strip the leading `# Textarea` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Textarea",
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI textarea. No CSS custom properties are set — apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    placeholder: "Enter text here",
    className: "textarea--froglet",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet neutral border and primary focus ring.

\`\`\`css
.textarea--froglet {
  --textarea-border-width: 2px;
  --textarea-border-style: solid;
  --textarea-border-color: #d1d5db;
  --textarea-border-radius: 6px;
  --textarea-padding: 10px 16px;
  --textarea-font-size: 1rem;
  --textarea-line-height: 1.5;
  --textarea-text-color: #111827;
  --textarea-background-color: #ffffff;

  --textarea-border-color-hover: #9ca3af;
  --textarea-background-color-hover: #f9fafb;

  --textarea-border-color-focus: #2e8b57;
  --textarea-outline-width-focus: 2px;
  --textarea-outline-color-focus: #5eba87;
  --textarea-outline-offset-focus: 3px;

  --textarea-border-color-disabled: #e5e7eb;
  --textarea-text-color-disabled: #d1d5db;
  --textarea-background-color-disabled: #f9fafb;
}
\`\`\``,
      },
    },
  },
};
