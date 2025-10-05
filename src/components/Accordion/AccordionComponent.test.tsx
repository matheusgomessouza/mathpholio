/**
 * @vitest-environment jsdom
 */

import { AccordionComponent } from "@/components/Accordion/AccordionComponent";
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

vi.mock("@/variables/data", () => ({
  questions: [
    { title: "Question 1", information: "Information 1" },
    { title: "Question 2", information: "Information 2" },
  ],
}));

describe("AccordionComponent", () => {
  it("renders a wrapping article", () => {
    render(<AccordionComponent />);
    expect(screen.getByRole("article")).not.toBeNull();
  });

  it("renders exactly two <details> elements", () => {
    render(<AccordionComponent />);
    const details = screen.getAllByRole("group");
    expect(details).toHaveLength(2);
  });

  it("renders each question title and information", () => {
    render(<AccordionComponent />);
    expect(screen.getAllByText("Question 1")).toHaveLength(1);
    expect(screen.getAllByText("Information 1")).toHaveLength(1);
    expect(screen.getAllByText("Question 2")).toHaveLength(1);
    expect(screen.getAllByText("Information 2")).toHaveLength(1);
  });
});
