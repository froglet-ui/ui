import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@froglet/ui";
import "../assets/css/radio.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Radio/README.md?raw";

// Strip the leading `# Radio` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "radio-default",
    value: "a",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI radio button. No CSS custom properties are set — apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    name: "radio-froglet",
    value: "a",
    className: "radio--froglet",
    defaultChecked: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet primary palette. Shown in checked state by default.

\`\`\`css
.radio--froglet {
  --radio-size: 1.125rem;
  --radio-border-width: 2px;
  --radio-border-style: solid;
  --radio-border-color: #2e8b57;
  --radio-border-radius: 50%;
  --radio-background-color: #ffffff;

  --radio-border-color-hover: #245f45;
  --radio-background-color-hover: #f0f7f4;

  --radio-outline-width-focus: 2px;
  --radio-outline-color-focus: #5eba87;
  --radio-outline-offset-focus: 3px;

  --radio-border-color-checked: #2e8b57;
  --radio-background-color-checked: #2e8b57;
  --radio-dot-color-checked: #ffffff;

  --radio-border-color-disabled: #d3e9d7;
  --radio-background-color-disabled: #f0f7f4;
  --radio-dot-color-disabled: #7a9a7d;
}
\`\`\``,
      },
    },
  },
};
