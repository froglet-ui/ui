import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@froglet/ui";
import "../assets/css/progress.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Progress/README.md?raw";

// Strip the leading `# Progress` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={0.6} max={1} />,
  parameters: {
    docs: {
      description: {
        story:
          "The base Progress with no modifier class applied. Renders with a `Canvas` track and `currentColor` fill by default — enough to be recognizable without any configuration. Apply a modifier class for themed variants.",
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: "24rem",
      }}
    >
      <Progress className="progress--primary" value={0.75} max={1} />
      <Progress className="progress--secondary" value={0.5} max={1} />
      <Progress className="progress--neutral" value={0.9} max={1} />
      <Progress className="progress--danger" value={0.3} max={1} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Four Froglet palette variants — primary, secondary, neutral, and danger — each using a modifier class that sets fill and track colors.

\`\`\`css
.progress--primary {
  --progress-fill-color: #2e8b57;
  --progress-background-color: #f0f7f4;
  --progress-border-radius: 6px;
}
\`\`\``,
      },
    },
  },
};
