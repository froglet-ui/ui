import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@froglet/ui";
import "../assets/css/link.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Link/README.md?raw";

// Strip the leading `# Link` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Visit Example",
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Link. No CSS custom properties are set — apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    children: "Visit Example",
    className: "link--froglet",
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet primary green and secondary violet for visited links.

\`\`\`css
.link--froglet {
  --link-text-color: #2e8b57;
  --link-text-decoration: underline;

  --link-text-color-hover: #245f45;
  --link-text-decoration-hover: none;

  --link-outline-width-focus: 2px;
  --link-outline-color-focus: #5eba87;
  --link-outline-offset-focus: 3px;
  --link-text-decoration-focus: underline;

  --link-text-color-visited: #7c3aed;
}
\`\`\``,
      },
    },
  },
};
