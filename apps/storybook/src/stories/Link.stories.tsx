import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@froglet/ui/link";

const meta = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Link",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Froglet UI link without additional class modifications.",
      },
    },
  },
};
