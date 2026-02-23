import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabList, TabPanel, Tabs } from "@froglet/ui";
import "../assets/css/tabs.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Tabs/README.md?raw";

// Strip the leading `# Tabs` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabList>
        <Tab value="account">Account</Tab>
        <Tab value="password">Password</Tab>
        <Tab value="notifications">Notifications</Tab>
      </TabList>
      <TabPanel value="account">
        <p className="story-body-text">
          Manage your account details, email address, and display name here.
        </p>
      </TabPanel>
      <TabPanel value="password">
        <p className="story-body-text">
          Update your password and configure two-factor authentication here.
        </p>
      </TabPanel>
      <TabPanel value="notifications">
        <p className="story-body-text">
          Choose which events trigger email or in-app notifications here.
        </p>
      </TabPanel>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Tabs. No CSS custom properties are set — the list bottom border and active tab indicator both inherit `currentColor`. Apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <Tabs defaultValue="account" className="tabs--froglet">
      <TabList>
        <Tab value="account">Account</Tab>
        <Tab value="password">Password</Tab>
        <Tab value="notifications">Notifications</Tab>
      </TabList>
      <TabPanel value="account">
        <p className="story-body-text">
          Manage your account details, email address, and display name here.
        </p>
      </TabPanel>
      <TabPanel value="password">
        <p className="story-body-text">
          Update your password and configure two-factor authentication here.
        </p>
      </TabPanel>
      <TabPanel value="notifications">
        <p className="story-body-text">
          Choose which events trigger email or in-app notifications here.
        </p>
      </TabPanel>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: `Themed with Froglet tokens. The active tab renders in primary green with a matching bottom indicator. Inactive tabs are muted until selected or hovered.

\`\`\`css
.tabs--froglet {
  --tabs-list-border-bottom-color: #d1d5db;
  --tabs-tab-color: #6b7280;
  --tabs-tab-color-selected: #2e8b57;
  --tabs-tab-color-hover: #111827;
  --tabs-tab-background-color-hover: #f3f4f6;
  --tabs-tab-border-bottom-color-selected: #2e8b57;
  --tabs-tab-font-weight-selected: 600;
  --tabs-tab-outline-width-focus: 2px;
  --tabs-tab-outline-color-focus: #5eba87;
  --tabs-tab-outline-offset-focus: 3px;
  --tabs-panel-padding: 1rem 0;
}
\`\`\``,
      },
    },
  },
};
