import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@froglet/ui";

const meta = {
  title: "Textarea",
  component: Textarea,
  tags: ["autodocs"],
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
          "The default Froglet UI textarea without any additional class modifications.",
      },
    },
  },
};

export const Primary: Story = {
  args: {
    placeholder: "Primary styled textarea",
    className: "textarea--primary",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
An example of how a consumer might implement a primary-styled textarea using
the \`textarea--primary\` class as a styling hook. This class isn't provided
by default but can be used to apply custom primary styles via CSS Custom Properties.

For example, the following styles could be applied:

\`\`\`css
.textarea--primary {
  --textarea-background-color: #2e8b57;
  --textarea-text-color: #ffffff;
  --textarea-border-color: #276c46;
  --textarea-border-width: 2px;
  --textarea-border-radius: 8px;
  --textarea-padding: 12px 16px;
  --textarea-font-size: 1rem;
  
  --textarea-background-color-hover: #3ba66b;
  --textarea-border-color-hover: #2d6a47;
  
  --textarea-background-color-disabled: #d3e9d7;
  --textarea-border-color-disabled: #d6d6d6;
  --textarea-text-color-disabled: #7a9a7d;
}
\`\`\`
        `,
      },
    },
  },
};
