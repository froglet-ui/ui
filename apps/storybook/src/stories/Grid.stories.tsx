import type { Meta, StoryObj } from "@storybook/react";
import { GridContainer } from "@froglet/ui";
import { GridItem } from "@froglet/ui";

const meta = {
  title: "Grid",
  component: GridContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof GridContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <GridContainer {...args}>
      <GridItem columnSpan={12}>Full Width (12/12)</GridItem>
      <GridItem columnSpan={6}>Half Width (6/12)</GridItem>
      <GridItem columnSpan={6}>Half Width (6/12)</GridItem>
      <GridItem columnSpan={4}>One Third (4/12)</GridItem>
      <GridItem columnSpan={4}>One Third (4/12)</GridItem>
      <GridItem columnSpan={4}>One Third (4/12)</GridItem>
    </GridContainer>
  ),
  args: {
    children: null,
  },
  parameters: {
    docs: {
      description: {
        story: `
A demonstration of the Froglet UI \`GridContainer\` and \`GridItem\` components.
These use CSS Grid under the hood and leverage CSS Custom Properties for layout control.

Each \`GridItem\` can specify how many of the 12 available columns it spans via the
\`columnSpan\` prop. Additional layout customization should be done through BEM-style
classes that override CSS custom properties like \`--grid-container-gap\` or 
\`--grid-item-align-self\`.
        `,
      },
    },
  },
};
