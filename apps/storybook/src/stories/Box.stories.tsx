import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@froglet/ui";
import "../assets/css/box.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Box/README.md?raw";

// Strip the leading `# Box` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Box>
      <p style={{ margin: 0 }}>
        A brandless container. No CSS custom properties are set — inherits
        surrounding styles. Apply a modifier class to theme it.
      </p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The base Box with no modifier class applied. A 1px `#e5e7eb` border and 4px radius render by default — enough to make the container visible without any configuration. Override any token with a modifier class.",
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <Box className="box--froglet">
      <p style={{ margin: 0, fontSize: "0.875rem", color: "#374151" }}>
        A bordered container with padding, background, and rounded corners —
        themed with Froglet tokens.
      </p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: `Themed with Froglet tokens — bordered surface with 1rem padding and rounded corners.

\`\`\`css
.box--froglet {
  --box-border-width: 1px;
  --box-border-style: solid;
  --box-border-color: #d1d5db;
  --box-border-radius: 6px;
  --box-background-color: #ffffff;
  --box-padding: 1rem;
}
\`\`\``,
      },
    },
  },
};
