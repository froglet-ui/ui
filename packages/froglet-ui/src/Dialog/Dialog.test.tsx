import { createRef } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./Dialog";

// jsdom does not implement showModal/close natively.
// The mock sets/clears the `open` attribute so the <dialog> appears in the
// accessible tree, matching real browser behavior.
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (
    this: HTMLDialogElement,
  ) {
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
    this.removeAttribute("open");
  });
});

const renderDialog = (defaultOpen = false) =>
  render(
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger>
        <button type="button">Open</button>
      </DialogTrigger>
      <DialogContent>
        <p>Dialog body</p>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>,
  );

describe("Dialog", () => {
  it("renders", () => {
    renderDialog(true);
    expect(screen.getByRole("dialog")).toBeDefined();
  });

  it("applies className", () => {
    const { container } = render(
      <Dialog>
        <DialogContent className="dialog--froglet">
          <p>Content</p>
        </DialogContent>
      </Dialog>,
    );
    const dialog = container.querySelector(".dialog");
    expect(dialog).toHaveClass("dialog");
    expect(dialog).toHaveClass("dialog--froglet");
  });

  it("opens on trigger click", () => {
    renderDialog();
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledOnce();
  });

  it("closes on close click", () => {
    renderDialog(true);
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalledOnce();
  });

  it("closes on native close event (Escape key)", () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog defaultOpen={true} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>,
    );
    fireEvent(screen.getByRole("dialog"), new Event("close"));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDialogElement>();
    render(
      <Dialog>
        <DialogContent ref={ref}>
          <p>Content</p>
        </DialogContent>
      </Dialog>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDialogElement);
  });
});
