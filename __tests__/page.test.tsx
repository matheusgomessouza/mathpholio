import { expect, test, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "../src/app/page";

describe("Page component", () => {
  test.skip("if page component has an carousel child component", async () => {
    render(<Page />);
    expect(await screen.findAllByRole("slider")).toBeDefined();
  });
});
