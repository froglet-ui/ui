import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@froglet/ui";
import type { TableColumn, TableProps } from "@froglet/ui";
import "../assets/css/table.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Table/README.md?raw";

// Strip the leading `# Table` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

// Sample data shared across stories.
type Row = { name: string; role: string; status: string };

const columns: TableColumn<Row>[] = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const data: Row[] = [
  { name: "Alice Martin", role: "Engineer", status: "Active" },
  { name: "Bob Chen", role: "Designer", status: "Active" },
  { name: "Carol Smith", role: "Manager", status: "On leave" },
];

// Cast to a concrete type so Storybook's Meta can resolve the generic.
type ConcreteTable = React.ComponentType<TableProps<Row>>;

const meta = {
  title: "Table",
  component: Table as ConcreteTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<ConcreteTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Table columns={columns} data={data} />,
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Froglet UI table. No CSS custom properties are set — renders with browser defaults. Apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <Table
      className="table--froglet"
      columns={columns}
      data={data}
      caption="Team members"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: `Themed with the Froglet neutral palette. Header has a subtle background and 2px bottom border. Rows alternate between \`Canvas\` and a light gray stripe. A \`caption\` is provided for accessibility.

\`\`\`css
.table--froglet {
  --table-th-background-color: #f9fafb;
  --table-th-text-color: #111827;
  --table-th-border-bottom-width: 2px;
  --table-th-border-bottom-color: #d1d5db;
  --table-tr-background-color-even: #f9fafb;
  --table-tr-background-color-odd: #ffffff;
  --table-td-text-color: #111827;
  --table-td-border-bottom-width: 1px;
  --table-td-border-bottom-color: #d1d5db;
  --table-caption-text-color: #6b7280;
}
\`\`\``,
      },
    },
  },
};
