import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@froglet/ui/Link";

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
  --link-hover-text-color: #3ba66b;
  --link-visited-text-color: #276c46;

  /* Text Decoration */
  --link-text-decoration: underline;
  --link-hover-text-decoration: none;
  --link-focus-text-decoration: underline;

  /* Focus/Focus-visible Outline */
  --link-focus-outline-color: #80bdff;
  --link-focus-outline-width: 2px;
  --link-focus-outline-offset: 2px;
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
  --link-hover-text-color: #b13fd6;
  --link-visited-text-color: #7a36a4;

  /* Text Decoration */
  --link-text-decoration: underline;
  --link-hover-text-decoration: none;
  --link-focus-text-decoration: underline;

  /* Focus/Focus-visible Outline */
  --link-focus-outline-color: #80bdff;
  --link-focus-outline-width: 2px;
  --link-focus-outline-offset: 2px;
}
\`\`\`
        `,
      },
    },
  },
};
