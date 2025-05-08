import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@froglet/ui";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
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
          "The default Froglet UI select without additional class modifications.",
      },
    },
  },
};

export const Primary: Story = {
  args: {
    children: (
      <>
        <option value="">Choose an option</option>
        <option value="one">Option One</option>
        <option value="two">Option Two</option>
      </>
    ),
    className: "select--primary",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
An example of how a consumer might implement a primary select using
a custom CSS class. The \`select--primary\` class is not provided by
Froglet UI by default, but serves as a styling hook.

This approach leverages CSS Custom Properties for customization.
For example:

\`\`\`css
.select--primary {
  --select-background-color: #f0f8ff;
  --select-text-color: #1a1a1a;

  --select-border-color: #2e8b57;
  --select-border-width: 2px;
  --select-border-radius: 6px;

  --select-padding: 10px 14px;
  --select-font-size: 1rem;

  --select-background-color-hover: #e6f5ec;
  --select-text-color-hover: #000000;

  --select-background-color-disabled: #f5f5f5;
  --select-text-color-disabled: #999999;
  --select-border-color-disabled: #cccccc;
}
\`\`\`
        `,
      },
    },
  },
};
