import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@froglet/ui";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
      ],
      control: {
        type: "select",
      },
      defaultValue: "text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "A Text Input",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Froglet UI input without additional class modifications.",
      },
    },
  },
};
