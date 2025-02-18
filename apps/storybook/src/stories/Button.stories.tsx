import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@froglet/ui/Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Froglet UI button without additional class modifications.",
      },
    },
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "button--primary",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
An example of how a consumer might implement a primary button using
custom CSS class names. The \`button--primary\` class is not provided
by Froglet UI by default, but is used here as a styling hook.

This approach leverages CSS Custom Properties to allow easy customization.
For example, the following styles could be applied:

\`\`\`css
.button--primary {
  --button-background-color: #2e8b57;
  --button-text-color: #ffffff;
  
  --button-border-color: #276c46;
  --button-border-width: 2px;
  --button-border-radius: 8px;
  
  --button-padding: 12px 24px;
  --button-font-size: 1.2rem;
  
  --button-hover-background-color: #3ba66b;
  --button-hover-text-color: #ffffff;
  
  --button-disabled-background-color: #d3e9d7;
  --button-disabled-text-color: #7a9a7d;
}
\`\`\`
        `,
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    className: "button--secondary",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
Another example demonstrating how a consumer might apply custom
styles using the \`button--secondary\` class as a styling hook. Like
\`button--primary\`, this class is not included in Froglet UI by default
but allows for easy customization using CSS Custom Properties.

For example, the following styles could be applied:

\`\`\`css
.button--secondary {
  --button-background-color: #9b4dca;
  --button-text-color: #ffffff;
  
  --button-border-color: #7a36a4;
  --button-border-radius: 50px;
  
  --button-padding: 12px 24px;
  --button-font-size: 1.2rem;
  
  --button-hover-background-color: #b13fd6;
  --button-hover-text-color: #ffffff;
  
  --button-disabled-background-color: #f5f5f5;
  --button-disabled-text-color: #b0b0b0;
}
\`\`\`
        `,
      },
    },
  },
};
