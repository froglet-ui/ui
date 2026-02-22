import type { Meta, StoryObj } from "@storybook/react";
import { GridContainer, GridItem } from "@froglet/ui";
import "../assets/css/grid.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Grid/README.md?raw";

// Strip the leading `# Grid` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Grid",
  component: GridContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
  argTypes: {
    columns: { control: { type: "number" } },
    gap: { control: { type: "text" } },
    autoFlow: {
      control: { type: "select" },
      options: ["row", "column", "row dense", "column dense"],
    },
    justifyContent: {
      control: { type: "select" },
      options: [
        "start",
        "end",
        "center",
        "stretch",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    alignContent: {
      control: { type: "select" },
      options: [
        "start",
        "end",
        "center",
        "stretch",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
  },
} satisfies Meta<typeof GridContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <GridContainer {...args}>
      <GridItem columnSpan={12} className="grid-item--demo">
        Full Width (12/12)
      </GridItem>
      <GridItem columnSpan={6} className="grid-item--demo">
        Half Width (6/12)
      </GridItem>
      <GridItem columnSpan={6} className="grid-item--demo">
        Half Width (6/12)
      </GridItem>
      <GridItem columnSpan={4} className="grid-item--demo">
        One Third (4/12)
      </GridItem>
      <GridItem columnSpan={4} className="grid-item--demo">
        One Third (4/12)
      </GridItem>
      <GridItem columnSpan={4} className="grid-item--demo">
        One Third (4/12)
      </GridItem>
    </GridContainer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Common column span patterns on a 12-column grid. Use the `columnSpan` prop on `GridItem` to control width. For responsive layouts, override `--grid-item-column-span` in a media query on a className.",
      },
    },
  },
};

export const Controls: Story = {
  render: (args) => (
    <GridContainer {...args}>
      <GridItem columnSpan={1} className="grid-item--demo">
        1
      </GridItem>
      <GridItem columnSpan={1} className="grid-item--demo">
        2
      </GridItem>
      <GridItem columnSpan={1} className="grid-item--demo">
        3
      </GridItem>
    </GridContainer>
  ),
  args: {
    columns: 3,
    gap: "1rem",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the Controls panel to adjust `columns`, `gap`, `autoFlow`, `justifyContent`, and `alignContent`. All values set CSS custom properties on the container.",
      },
    },
  },
};
