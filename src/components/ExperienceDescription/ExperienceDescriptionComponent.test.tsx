/**
 * @vitest-environment jsdom
 */

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceDescriptionComponent } from "./ExperienceDescriptionComponent";

describe("ExperienceDescriptionComponent", () => {
  const defaultProps = {
    jobTitle: "Software Engineer",
    company: "Tech Corp",
    locality: "Remote",
    period: "2020 - 2023",
    children: (
      <>
        <li>Developed cool features</li>
        <li>Improved performance</li>
      </>
    ),
  };

  it("renders job title and company in mobile view", () => {
    render(<ExperienceDescriptionComponent {...defaultProps} />);
    // Both jobTitle and company should be rendered at least once
    expect(screen.getAllByText(defaultProps.jobTitle).length).toBeGreaterThan(
      0
    );
    expect(screen.getAllByText(defaultProps.company).length).toBeGreaterThan(0);
  });

  it("renders locality and period", () => {
    render(<ExperienceDescriptionComponent {...defaultProps} />);
    expect(screen.queryAllByText(defaultProps.locality)).not.toBeNull();
    expect(screen.queryAllByText(defaultProps.period)).not.toBeNull();
  });

  it("renders children as list items", () => {
    render(<ExperienceDescriptionComponent {...defaultProps} />);
    expect(screen.getAllByText("Developed cool features")).not.toBeNull();
    expect(screen.getAllByText("Improved performance")).not.toBeNull();
    const list = screen.getAllByRole("list");
    expect(list).not.toBeNull();
    expect(screen.getAllByRole("listitem").length).toBe(6);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <ExperienceDescriptionComponent {...defaultProps} />
    );
    expect(container).toMatchSnapshot();
  });
});
