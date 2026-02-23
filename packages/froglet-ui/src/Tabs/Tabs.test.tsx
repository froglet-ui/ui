import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

const renderTabs = (defaultValue = "account") =>
  render(
    <Tabs defaultValue={defaultValue}>
      <TabList>
        <Tab value="account">Account</Tab>
        <Tab value="password">Password</Tab>
      </TabList>
      <TabPanel value="account">Account content</TabPanel>
      <TabPanel value="password">Password content</TabPanel>
    </Tabs>,
  );

describe("Tabs", () => {
  it("renders", () => {
    renderTabs();
    expect(screen.getByRole("tablist")).toBeDefined();
    expect(screen.getAllByRole("tab")).toHaveLength(2);
  });

  it("applies className", () => {
    const { container } = render(
      <Tabs defaultValue="account" className="tabs--froglet">
        <TabList>
          <Tab value="account">Account</Tab>
        </TabList>
        <TabPanel value="account">Account content</TabPanel>
      </Tabs>,
    );
    const root = container.querySelector(".tabs");
    expect(root).toHaveClass("tabs");
    expect(root).toHaveClass("tabs--froglet");
  });

  it("shows default active panel", () => {
    renderTabs("account");
    expect(screen.getByRole("tabpanel")).toBeDefined();
    expect(screen.getByText("Account content")).toBeDefined();
  });

  it("switches tab on click", () => {
    renderTabs("account");
    const passwordTab = screen.getByRole("tab", { name: "Password" });
    fireEvent.click(passwordTab);
    expect(screen.getByRole("tabpanel")).toBeDefined();
    expect(screen.getByText("Password content")).toBeDefined();
  });

  it("aria attributes", () => {
    renderTabs("account");
    const accountTab = screen.getByRole("tab", { name: "Account" });
    const passwordTab = screen.getByRole("tab", { name: "Password" });
    expect(accountTab).toHaveAttribute("aria-selected", "true");
    expect(passwordTab).toHaveAttribute("aria-selected", "false");
    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute(
      "aria-labelledby",
      accountTab.getAttribute("id"),
    );
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Tabs defaultValue="account" ref={ref}>
        <TabList>
          <Tab value="account">Account</Tab>
        </TabList>
        <TabPanel value="account">Account content</TabPanel>
      </Tabs>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
