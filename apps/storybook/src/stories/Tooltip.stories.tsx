import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@froglet/ui";
import "../assets/css/tooltip.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Tooltip/README.md?raw";

// Strip the leading `# Tooltip` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <button type="button">Hover me</button>
      </TooltipTrigger>
      <TooltipContent>Tooltip text</TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Tooltip. No CSS custom properties are set — the panel uses CSS system color keywords (`CanvasText` background, `Canvas` text) for default contrast. Apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "3rem",
        padding: "4rem 2rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Tooltip className="tooltip--froglet">
        <TooltipTrigger>
          <button type="button">Top (default)</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip className="tooltip--froglet">
        <TooltipTrigger>
          <button type="button">Bottom</button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip className="tooltip--froglet">
        <TooltipTrigger>
          <button type="button">Left</button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>

      <Tooltip className="tooltip--froglet">
        <TooltipTrigger>
          <button type="button">Right</button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Themed with Froglet tokens. All four placement options are shown — hover or focus each button to reveal the tooltip. The panel uses a dark background with white text for contrast against the page surface.

\`\`\`css
.tooltip--froglet {
  --tooltip-padding: 0.375rem 0.625rem;
  --tooltip-font-size: 0.8125rem;
  --tooltip-background-color: #111827;
  --tooltip-color: #ffffff;
  --tooltip-border-radius: 6px;
  --tooltip-offset: 6px;
}
\`\`\``,
      },
    },
  },
};
