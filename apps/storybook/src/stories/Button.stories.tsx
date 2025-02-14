import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@froglet/ui/button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    className: "button--primary",
    type: "button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    className: "button--secondary",
    type: "button",
  },
};
