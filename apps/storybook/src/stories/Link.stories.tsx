import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@froglet/ui";

const meta = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Link",
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Froglet UI link without any additional class modifications.",
      },
    },
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Link",
    className: "link--primary",
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story: `
An example of how a consumer might implement a primary link using
custom CSS class names. The \`link--primary\` class is not provided
by Froglet UI by default, but is used here as a styling hook.

This approach leverages CSS Custom Properties to allow easy customization.
For example, the following styles could be applied:

\`\`\`css
.link--primary {
  /* Base Colors */
  --link-text-color: #2e8b57;
  --link-text-color-hover: #3ba66b;
  --link-text-color-visited: #276c46;

  /* Text Decoration */
  --link-text-decoration: underline;
  --link-text-decoration-hover: none;
  --link-text-decoration-focus: underline;

  /* Focus/Focus-visible Outline */
  --link-outline-color-focus: #80bdff;
  --link-outline-width-focus: 2px;
  --link-outline-offset-focus: 2px;
}
\`\`\`
        `,
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Link",
    className: "link--secondary",
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story: `
Another example demonstrating how a consumer might apply custom
styles using the \`link--secondary\` class as a styling hook. Like
\`link--primary\`, this class is not included in Froglet UI by default
but allows for easy customization using CSS Custom Properties.

For example, the following styles could be applied:

\`\`\`css
.link--secondary {
  /* Base Colors */
  --link-text-color: #9b4dca;
  --link-text-color-hover: #b13fd6;
  --link-text-color-visited: #7a36a4;

  /* Text Decoration */
  --link-text-decoration: underline;
  --link-text-decoration-hover: none;
  --link-text-decoration-focus: underline;

  /* Focus/Focus-visible Outline */
  --link-outline-color-focus: #80bdff;
  --link-outline-width-focus: 2px;
  --link-outline-offset-focus: 2px;
}
\`\`\`
        `,
      },
    },
  },
};
