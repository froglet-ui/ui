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
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 1, step: 0.05 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 0.6,
    max: 1,
  },
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
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: "24rem",
      }}
    >
      <Progress className="progress--primary" {...args} />
      <Progress className="progress--secondary" {...args} />
      <Progress className="progress--neutral" {...args} />
      <Progress className="progress--danger" {...args} />
    </div>
  ),
  args: {
    value: 0.6,
    max: 1,
  },
  parameters: {
    docs: {
      description: {
        story: `Four Froglet palette variants — primary, secondary, neutral, and danger. Use the Controls panel \`value\` slider to scrub all four bars simultaneously.

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
