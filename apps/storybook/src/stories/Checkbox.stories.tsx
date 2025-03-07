import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@froglet/ui";
import { useState } from "react";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    // Define the controlled component inside the render function
    const ControlledCheckbox = () => {
      const [checked, setChecked] = useState(args.checked ?? false);

      // Simple Set Check for Checkbox.
      const handleChange = () => {
        setChecked(!checked);
      };

      return (
        <Checkbox
          {...args}
          checked={checked}
          disabled={args.disabled}
          onChange={handleChange}
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
        story: "The default Froglet UI checkbox component.",
      },
    },
  },
};
