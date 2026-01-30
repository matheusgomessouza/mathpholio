/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonComponent from "@/components/Button/ButtonComponent";
import React from "react";

// Mock next/link for testing
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href || "#"} {...props}>
      {children}
    </a>
  ),
}));

describe("ButtonComponent", () => {
  it("renders with label and link", () => {
    render(
      <ButtonComponent
        label="Test Button"
        link="https://example.com"
        ariaLabel="test button"
        isMobile={false}
      />
    );
    const link = screen.getByRole("link", { name: "test button" });
    expect(link).not.toBeNull();
    expect((link as HTMLAnchorElement).href).toBe("https://example.com/");
    expect(link.textContent).toBe("Test Button");
  });

  it("applies correct className for desktop", () => {
    render(
      <ButtonComponent
        label="Desktop"
        link="#"
        ariaLabel="desktop button"
        isMobile={false}
      />
    );
    const link = screen.getByRole("link", { name: "desktop button" });
    expect(link.className).toContain("bg-primary");
  });

  it("applies correct className for mobile", () => {
    render(
      <ButtonComponent
        label="Mobile"
        link="#"
        ariaLabel="mobile button"
        isMobile={true}
      />
    );
    const link = screen.getByRole("link", { name: "mobile button" });
    expect(link.className).toContain("bg-primary");
  });

  it("renders children if provided", () => {
    render(
      <ButtonComponent
        label="With Child"
        link="#"
        ariaLabel="with child"
        isMobile={false}
      >
        <span data-testid="child">Child</span>
      </ButtonComponent>
    );
    expect(screen.getByTestId("child")).not.toBeNull();
  });

  it("renders with default href if link is undefined", () => {
    render(
      <ButtonComponent label="No Link" ariaLabel="no link" isMobile={false} />
    );
    const link = screen.getByRole("link", { name: "no link" });
    expect(link.getAttribute("href")).toBe("#");
  });

  it("sets target to _blank", () => {
    render(
      <ButtonComponent
        label="Blank Target"
        link="#"
        ariaLabel="blank target"
        isMobile={false}
      />
    );
    const link = screen.getByRole("link", { name: "blank target" });
    expect(link.getAttribute("target")).toBe("_blank");
  });
});
