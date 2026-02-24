import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "@froglet/ui";
import "../assets/css/button.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Button/README.md?raw";

// Strip the leading `# Button` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI button. No CSS custom properties are set — apply a modifier class to theme it.",
      },
    },
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "button--primary",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
High-emphasis action. Use for the primary call to action on a page.

\`\`\`css
.button--primary {
  --button-background-color: #2e8b57;
  --button-text-color: #ffffff;
  --button-border-color: #2e8b57;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #245f45;
  --button-text-color-hover: #ffffff;

  --button-outline-color-focus: #5eba87;

  --button-background-color-disabled: #d3e9d7;
  --button-text-color-disabled: #7a9a7d;
  --button-border-color-disabled: #d3e9d7;
}
\`\`\`
        `,
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    className: "button--secondary",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
Medium-emphasis action. Use alongside a primary button for supporting actions.

\`\`\`css
.button--secondary {
  --button-background-color: #7c3aed;
  --button-text-color: #ffffff;
  --button-border-color: #7c3aed;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #6d28d9;
  --button-text-color-hover: #ffffff;

  --button-outline-color-focus: #a78bfa;

  --button-background-color-disabled: #ede9fe;
  --button-text-color-disabled: #a78bfa;
  --button-border-color-disabled: #ede9fe;
}
\`\`\`
        `,
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    className: "button--tertiary",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
Low-emphasis action. Use for cancel, back, or supplemental actions.

\`\`\`css
.button--tertiary {
  --button-background-color: transparent;
  --button-text-color: #4b5563;
  --button-border-color: #d1d5db;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #f3f4f6;
  --button-text-color-hover: #111827;

  --button-outline-color-focus: #9ca3af;

  --button-background-color-disabled: transparent;
  --button-text-color-disabled: #d1d5db;
  --button-border-color-disabled: #e5e7eb;
}
\`\`\`
        `,
      },
    },
  },
};

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <StarIcon />
      Favorite
    </Button>
  ),
  args: {
    className: "button--primary",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The button uses `display: inline-flex` and `align-items: center` so icons and text align vertically. Control the icon-to-label gap with `--button-gap` (default `4px`).",
      },
    },
  },
};

export const IconOnly: Story = {
  render: (args) => (
    <Button
      {...args}
      aria-label="Favorite"
      style={{ "--button-padding": "0.5rem" } as React.CSSProperties}
    >
      <StarIcon />
    </Button>
  ),
  args: {
    className: "button--primary",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "For icon-only buttons, set `--button-padding` to a uniform value (e.g. `0.5rem`). The button collapses to a square naturally. Always provide `aria-label` so screen readers announce the action.",
      },
    },
  },
};

export const Danger: Story = {
  args: {
    children: "Delete",
    className: "button--danger",
    type: "button",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
Destructive action. Use for delete, remove, or other irreversible operations.

\`\`\`css
.button--danger {
  --button-background-color: #dc2626;
  --button-text-color: #ffffff;
  --button-border-color: #dc2626;
  --button-border-style: solid;
  --button-border-width: 2px;
  --button-border-radius: 6px;
  --button-padding: 10px 20px;
  --button-font-size: 1rem;

  --button-background-color-hover: #b91c1c;
  --button-text-color-hover: #ffffff;

  --button-outline-color-focus: #f87171;

  --button-background-color-disabled: #fee2e2;
  --button-text-color-disabled: #fca5a5;
  --button-border-color-disabled: #fee2e2;
}
\`\`\`
        `,
      },
    },
  },
};
