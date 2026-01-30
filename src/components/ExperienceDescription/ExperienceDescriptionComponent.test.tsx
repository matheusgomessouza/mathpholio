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
    expect(screen.getAllByText(defaultProps.locality).length).toBeGreaterThan(
      0
    );
    expect(screen.getAllByText(defaultProps.period).length).toBeGreaterThan(0);
  });

  it("renders children as list items", () => {
    render(<ExperienceDescriptionComponent {...defaultProps} />);
    expect(
      screen.getAllByText("Developed cool features").length
    ).toBeGreaterThan(0);
    expect(screen.getAllByText("Improved performance").length).toBeGreaterThan(
      0
    );
    expect(screen.getAllByRole("list").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("listitem").length).toBeGreaterThanOrEqual(2);
  });
});
