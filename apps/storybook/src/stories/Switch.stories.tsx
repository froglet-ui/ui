import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "@froglet/ui";
import "../assets/css/switch.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Switch/README.md?raw";

// Strip the leading `# Switch` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Switch",
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const ControlledSwitch = () => {
      const [checked, setChecked] = useState(args.checked ?? false);
      return (
        <Switch
          {...args}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    };
    return <ControlledSwitch />;
  },
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI switch. No CSS custom properties are set — apply a modifier class to theme it. Click to toggle.",
      },
    },
  },
};

export const Froglet: Story = {
  render: (args) => {
    const ControlledSwitch = () => {
      const [checked, setChecked] = useState(false);
      return (
        <Switch
          {...args}
          className="switch--froglet"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    };
    return <ControlledSwitch />;
  },
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet primary palette. Click to toggle.

\`\`\`css
.switch--froglet {
  --switch-background-color: #9ca3af;
  --switch-background-color-checked: #2e8b57;
  --switch-background-color-disabled: #e5e7eb;
  --switch-thumb-color: #ffffff;
  --switch-thumb-color-disabled: #ffffff;
  --switch-outline-width-focus: 2px;
  --switch-outline-color-focus: #5eba87;
  --switch-outline-offset-focus: 3px;
}
\`\`\``,
      },
    },
  },
};
