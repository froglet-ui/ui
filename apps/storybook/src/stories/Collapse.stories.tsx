import type { Meta, StoryObj } from "@storybook/react";
import { Collapse, CollapseSummary } from "@froglet/ui";
import "../assets/css/collapse.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Collapse/README.md?raw";

// Strip the leading `# Collapse` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Collapse",
  component: Collapse,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapse>
      <CollapseSummary>What is Froglet?</CollapseSummary>
      <p style={{ margin: "0.5rem 0 0" }}>
        Froglet is a brandless React component library. All visual styling is
        driven by CSS custom properties.
      </p>
    </Collapse>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Collapse. No CSS custom properties are set — inherits surrounding styles. The `▶` marker rotates 90° on open via pure CSS. Apply modifier classes to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <Collapse className="collapse--froglet">
      <CollapseSummary className="collapse-summary--froglet">
        What is Froglet?
      </CollapseSummary>
      <p
        style={{
          margin: 0,
          padding: "0.75rem 1rem",
          color: "#374151",
          fontSize: "0.875rem",
        }}
      >
        Froglet is a brandless React component library. All visual styling is
        driven by CSS custom properties.
      </p>
    </Collapse>
  ),
  parameters: {
    docs: {
      description: {
        story: `Themed with Froglet tokens — bordered card container with styled summary trigger. The marker swaps between \`+\` (closed) and \`−\` (open). Rotation is disabled via \`--collapse-summary-marker-transform-open: rotate(0deg)\` so the content change is the only visual cue. The default unstyled marker (\`▶\`) retains its 90° rotation animation.

\`\`\`css
.collapse--froglet {
  --collapse-border-width: 1px;
  --collapse-border-style: solid;
  --collapse-border-color: #d1d5db;
  --collapse-border-radius: 6px;
  --collapse-background-color: #ffffff;
}

.collapse-summary--froglet {
  --collapse-summary-font-weight: 500;
  --collapse-summary-text-color: #111827;
  --collapse-summary-padding: 0.75rem 1rem;
  --collapse-summary-background-color: #ffffff;
  --collapse-summary-background-color-hover: #f3f4f6;
  --collapse-summary-outline-width-focus: 2px;
  --collapse-summary-outline-color-focus: #5eba87;
  --collapse-summary-outline-offset-focus: 2px;
  --collapse-summary-marker-content: "+";
  --collapse-summary-marker-content-open: "−";
  --collapse-summary-marker-font-size: 1em;
  --collapse-summary-marker-transform-open: rotate(0deg);
}
\`\`\``,
      },
    },
  },
};

const faqItems = [
  {
    question: "What is Froglet?",
    answer:
      "Froglet is a brandless React component library. All visual styling is driven by CSS custom properties — no typography defaults are applied until tokens are provided.",
  },
  {
    question: "How do I apply a theme?",
    answer:
      "Apply a modifier class that sets the appropriate CSS custom properties for your brand. See the Froglet Style Guide for reference implementations.",
  },
  {
    question: "Does Collapse require JavaScript for open/close?",
    answer:
      "No. Collapse is built on the native <details> and <summary> HTML elements. The browser handles all open/close behavior without any JavaScript.",
  },
];

export const FAQ: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "36rem",
      }}
    >
      {faqItems.map((item) => (
        <Collapse key={item.question} className="collapse--froglet">
          <CollapseSummary className="collapse-summary--froglet">
            {item.question}
          </CollapseSummary>
          <p
            style={{
              margin: 0,
              padding: "0.75rem 1rem",
              color: "#374151",
              fontSize: "0.875rem",
              lineHeight: 1.6,
            }}
          >
            {item.answer}
          </p>
        </Collapse>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Three independent Collapse items styled as a FAQ. Each item opens and closes independently — no accordion coordination required. Each `<details>` manages its own state natively.",
      },
    },
  },
};
