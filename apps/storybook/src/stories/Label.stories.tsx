import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Input, Label, Radio, Select, Textarea } from "@froglet/ui";
import "../assets/css/checkbox.storybook.css";
import "../assets/css/input.storybook.css";
import "../assets/css/label.storybook.css";
import "../assets/css/radio.storybook.css";
import "../assets/css/select.storybook.css";
import "../assets/css/textarea.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Label/README.md?raw";

// Strip the leading `# Label` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email address",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The unstyled Label. No CSS custom properties are set — inherits surrounding text styles. Apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  args: {
    children: "Email address",
    className: "label--froglet",
  },
  parameters: {
    docs: {
      description: {
        story: `Themed with Froglet typography tokens.

\`\`\`css
.label--froglet {
  --label-font-size: 0.875rem;
  --label-font-weight: 500;
  --label-text-color: #111827;
}
\`\`\``,
      },
    },
  },
};

export const WithInput: Story = {
  args: {
    children: "Email address",
    className: "label--froglet",
    htmlFor: "email-demo",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.375rem",
          width: "20rem",
        }}
      >
        <Story />
        <input
          id="email-demo"
          type="email"
          placeholder="you@example.com"
          style={{
            border: "2px solid #d1d5db",
            borderRadius: "6px",
            padding: "10px 16px",
            fontSize: "1rem",
            fontFamily: "inherit",
          }}
        />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Label associated with an input via `htmlFor`. Clicking the label focuses the input. The `<input>` here is plain HTML to keep the story focused on Label.",
      },
    },
  },
};

export const FormDemo: Story = {
  render: () => (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        maxWidth: "24rem",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}
      >
        <Label className="label--froglet" htmlFor="demo-email">
          Email address
        </Label>
        <Input
          className="input--froglet"
          id="demo-email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}
      >
        <Label className="label--froglet" htmlFor="demo-role">
          Role
        </Label>
        <Select className="select--froglet" id="demo-role">
          <option value="">Select a role...</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </Select>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}
      >
        <Label className="label--froglet" htmlFor="demo-bio">
          Bio
        </Label>
        <Textarea
          className="textarea--froglet"
          id="demo-bio"
          placeholder="Tell us about yourself..."
          rows={3}
        />
      </div>

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={{ padding: 0 }}>
          <Label
            className="label--froglet"
            style={{ display: "block", marginBottom: "0.375rem" }}
          >
            Notifications
          </Label>
        </legend>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Radio
              className="radio--froglet"
              name="notifications"
              id="demo-notif-email"
            />
            <Label className="label--froglet" htmlFor="demo-notif-email">
              Email
            </Label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Radio
              className="radio--froglet"
              name="notifications"
              id="demo-notif-sms"
            />
            <Label className="label--froglet" htmlFor="demo-notif-sms">
              SMS
            </Label>
          </div>
        </div>
      </fieldset>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Checkbox className="checkbox--froglet" id="demo-terms" />
        <Label className="label--froglet" htmlFor="demo-terms">
          I agree to the terms of service
        </Label>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Label paired with all Froglet form controls: Input, Select, Textarea, Radio, and Checkbox. Each label is associated via `htmlFor`. Clicking any label focuses or activates its control.",
      },
    },
  },
};
