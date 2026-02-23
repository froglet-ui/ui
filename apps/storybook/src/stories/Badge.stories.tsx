import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@froglet/ui";
import "../assets/css/badge.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Badge/README.md?raw";

// Strip the leading `# Badge` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "New",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The base Badge with no modifier class applied. Unlike native form elements, `<span>` has no browser UA styles — so the base `.badge` class provides neutral gray fallbacks (`#e5e7eb` background, `#374151` text, pill shape) to ensure it renders as a recognizable badge out of the box. Override any token with a modifier class.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    children: "New",
    className: "badge--froglet",
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with Froglet visual tokens — gray pill shape.

\`\`\`css
.badge--froglet {
  --badge-background-color: #f3f4f6;
  --badge-text-color: var(--color-text);
  --badge-border-radius: 9999px;
  --badge-font-size: 0.75rem;
  --badge-font-weight: 600;
  --badge-padding: 0.125rem 0.5rem;
}
\`\`\``,
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Badge className="badge--froglet">Default</Badge>
      <Badge
        className="badge--froglet"
        style={
          {
            "--badge-background-color": "#dbeafe",
            "--badge-text-color": "#1e40af",
          } as React.CSSProperties
        }
      >
        Blue
      </Badge>
      <Badge
        className="badge--froglet"
        style={
          {
            "--badge-background-color": "#dcfce7",
            "--badge-text-color": "#15803d",
          } as React.CSSProperties
        }
      >
        Green
      </Badge>
      <Badge
        className="badge--froglet"
        style={
          {
            "--badge-background-color": "#fee2e2",
            "--badge-text-color": "#b91c1c",
          } as React.CSSProperties
        }
      >
        Red
      </Badge>
      <Badge
        className="badge--froglet"
        style={
          {
            "--badge-background-color": "#fef9c3",
            "--badge-text-color": "#854d0e",
          } as React.CSSProperties
        }
      >
        Yellow
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All badges share the `badge--froglet` base class for shape and typography. Color variants are applied by overriding `--badge-background-color` and `--badge-text-color` inline — no extra CSS classes needed.",
      },
    },
  },
};
