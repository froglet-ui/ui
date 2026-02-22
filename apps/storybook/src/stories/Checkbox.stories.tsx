import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "@froglet/ui";
import "../assets/css/checkbox.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Checkbox/README.md?raw";

// Strip the leading `# Checkbox` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const ControlledCheckbox = () => {
      const [checked, setChecked] = useState(args.checked ?? false);
      return (
        <Checkbox
          {...args}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    };
    return <ControlledCheckbox />;
  },
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI checkbox. No CSS custom properties are set — apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  render: (args) => {
    const ControlledCheckbox = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Checkbox
          {...args}
          className="checkbox--froglet"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    };
    return <ControlledCheckbox />;
  },
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet primary palette. Click to toggle.

\`\`\`css
.checkbox--froglet {
  --checkbox-size: 1.125rem;
  --checkbox-border-width: 2px;
  --checkbox-border-style: solid;
  --checkbox-border-color: #2e8b57;
  --checkbox-border-radius: 4px;
  --checkbox-background-color: #ffffff;

  --checkbox-border-color-hover: #245f45;
  --checkbox-background-color-hover: #f0f7f4;

  --checkbox-outline-width-focus: 2px;
  --checkbox-outline-color-focus: #5eba87;
  --checkbox-outline-offset-focus: 3px;

  --checkbox-border-color-checked: #2e8b57;
  --checkbox-background-color-checked: #2e8b57;
  --checkbox-checkmark-color-checked: #ffffff;

  --checkbox-border-color-disabled: #d3e9d7;
  --checkbox-background-color-disabled: #f0f7f4;
  --checkbox-checkmark-color-disabled: #7a9a7d;
}
\`\`\``,
      },
    },
  },
};
