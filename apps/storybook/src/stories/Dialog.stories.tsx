import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@froglet/ui";
import "../assets/css/dialog.storybook.css";
import readme from "../../../../packages/froglet-ui/src/Dialog/README.md?raw";

// Strip the leading `# Dialog` heading — Storybook renders its own h1 from the story title.
const readmeBody = readme.replace(/^#[^\n]*\n+/, "");

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: readmeBody,
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <button type="button">Open dialog</button>
      </DialogTrigger>
      <DialogContent aria-label="Example dialog">
        <p>This is an unstyled dialog.</p>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "The unstyled Dialog. No CSS custom properties are set — trigger and close render as plain bordered buttons, the panel uses browser `<dialog>` defaults. Apply a modifier class to theme it.",
      },
    },
  },
};

export const Froglet: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button className="button--primary">Open dialog</Button>
      </DialogTrigger>
      <DialogContent className="dialog--froglet" aria-label="Froglet dialog">
        <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.125rem" }}>
          Dialog title
        </h2>
        <p
          style={{
            margin: "0 0 1.5rem",
            fontSize: "0.875rem",
            color: "#6b7280",
          }}
        >
          Themed with Froglet tokens. Press Escape or click Close to dismiss.
        </p>
        <DialogClose className="dialog__close--froglet">Close</DialogClose>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: `Themed with Froglet tokens. The panel has a white background, border, and rounded corners. The trigger and close buttons use the primary green palette.

\`\`\`css
.dialog--froglet {
  --dialog-padding: 1.5rem;
  --dialog-max-width: 32rem;
  --dialog-background-color: #ffffff;
  --dialog-color: #111827;
  --dialog-border-width: 1px;
  --dialog-border-style: solid;
  --dialog-border-color: #d1d5db;
  --dialog-border-radius: 6px;
  --dialog-backdrop-color: rgb(0 0 0 / 0.5);
  --dialog-outline-width-focus: 2px;
  --dialog-outline-color-focus: #5eba87;
  --dialog-outline-offset-focus: 3px;
}

.dialog__trigger--froglet {
  --dialog-trigger-padding: 10px 20px;
  --dialog-trigger-border-radius: 6px;
}

.dialog__close--froglet {
  --dialog-close-padding: 10px 20px;
  --dialog-close-border-radius: 6px;
}
\`\`\``,
      },
    },
  },
};
