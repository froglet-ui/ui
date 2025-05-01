import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@froglet/ui";

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "radio-default",
    value: "default",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Froglet UI radio button with no class modifications.",
      },
    },
  },
};

export const Primary: Story = {
  args: {
    name: "radio-primary",
    value: "primary",
    className: "radio--primary",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
An example of how a consumer might implement a primary-styled radio button
using a custom \`radio--primary\` class. This class isn't included in Froglet UI
by default, but serves as a useful styling hook.

Example custom styles:

\`\`\`css
.radio--primary {
  --radio-border-color: #2e8b57;
  --radio-background-color: #ffffff;
  --radio-border-width: 2px;
  --radio-border-radius: 50%;
  --radio-size: 1.25rem;

  --radio-border-color-hover: #276c46;
  --radio-background-color-hover: #f0fdf4;

  --radio-border-color-checked: #2e8b57;
  --radio-background-color-checked: #2e8b57;
  --radio-dot-color-checked: #ffffff;

  --radio-border-color-disabled: #d3e9d7;
  --radio-background-color-disabled: #f5f5f5;
  --radio-dot-color-disabled: #b0b0b0;
}
\`\`\`
        `,
      },
    },
  },
};
