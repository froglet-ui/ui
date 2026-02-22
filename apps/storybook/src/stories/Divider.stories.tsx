import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@froglet/ui";
import "../assets/css/divider.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Divider/README.md?raw";

// Strip the leading `# Divider` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Divider. No CSS custom properties are set — renders a `currentColor` horizontal line. Apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    className: "divider--froglet",
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet neutral border color.

\`\`\`css
.divider--froglet {
  --divider-border-color: #d1d5db;
  --divider-border-width: 1px;
  --divider-border-style: solid;
}
\`\`\``,
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    className: "divider--froglet",
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", height: "4rem", alignItems: "center" }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Vertical orientation. Wrapped in a flex row so the divider has space to render. `align-self: stretch` in the component CSS fills the cross-axis automatically.",
      },
    },
  },
};
