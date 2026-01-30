/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  within,
} from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";

vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("@/variables/data", () => ({
  menuLabels: [
    { id: "1", title: "Home", link: "#home" },
    { id: "2", title: "About", link: "#about" },
  ],
}));

describe("HeaderComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders brand links and desktop social links", () => {
    render(<HeaderComponent />);

    const brandLinks = screen.getAllByText("Mathpholio!");
    expect(brandLinks.length).toBeGreaterThan(0);

    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/matheus-gomes-de-souza"
    );
    expect(screen.getByLabelText("Notion")).toHaveAttribute(
      "href",
      "https://matheus-docs.notion.site/d1ebd3fda2d040e4810cc0e6447cf17b"
    );
    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "href",
      "https://www.github.com/matheusgomessouza"
    );

    expect(screen.getByLabelText("Reach me out through here")).toHaveAttribute(
      "href",
      "mailto:matheuscoworking@outlook.com"
    );
  });

  it("toggles the mobile navigation menu open and closed", () => {
    render(<HeaderComponent />);

    const toggle = screen.getAllByLabelText("Toggle navigation")[0];
    expect(screen.queryByLabelText("Close navigation")).toBeNull();

    fireEvent.click(toggle);
    expect(screen.getByLabelText("Close navigation")).toBeInTheDocument();

    const close = screen.getByLabelText("Close navigation");
    fireEvent.click(close);
    expect(screen.queryByLabelText("Close navigation")).toBeNull();
  });

  it("closes the mobile menu when a nav item is clicked", () => {
    render(<HeaderComponent />);

    fireEvent.click(screen.getAllByLabelText("Toggle navigation")[0]);
    const mobileNav = screen.getAllByRole("navigation", {
      name: "Navigation Menu",
    })[0];
    const navLink = within(mobileNav).getByLabelText("Go to section Home");
    fireEvent.click(navLink);

    expect(screen.queryByLabelText("Close navigation")).toBeNull();
  });

  it("renders navigation labels from menuLabels", () => {
    render(<HeaderComponent />);

    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
  });
});
