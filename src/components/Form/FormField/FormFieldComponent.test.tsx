/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormFieldComponent } from "./FormFieldComponent";

describe("FormFieldComponent", () => {
  it("renders input with type and placeholder and calls register", () => {
    const register = vi.fn().mockReturnValue({
      name: "email",
      onChange: vi.fn(),
      onBlur: vi.fn(),
      ref: vi.fn(),
    });

    render(
      <FormFieldComponent
        name="email"
        type="email"
        placeholder="Enter email"
        register={register}
        error={undefined}
      />
    );

    const input = screen.getByPlaceholderText(
      "Enter email"
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.type).toBe("email");
    expect(register).toHaveBeenCalledWith("email", { required: true });
  });

  it("applies non-error class when error is absent", () => {
    const register = vi.fn().mockReturnValue({
      name: "name",
      onChange: vi.fn(),
      onBlur: vi.fn(),
      ref: vi.fn(),
    });

    render(
      <FormFieldComponent
        name="name"
        type="text"
        placeholder="Name"
        register={register}
        error={undefined}
      />
    );

    const input = screen.getByPlaceholderText("Name");
    expect(input).toHaveClass("border-color-two");
    expect(input).not.toHaveClass("border-danger");
  });

  it("applies error class and renders error message when error is present", () => {
    const register = vi.fn().mockReturnValue({
      name: "message",
      onChange: vi.fn(),
      onBlur: vi.fn(),
      ref: vi.fn(),
    });

    render(
      <FormFieldComponent
        name="message"
        type="text"
        placeholder="Message"
        register={register}
        error={{ type: "required", message: "Required" }}
      />
    );

    const input = screen.getByPlaceholderText("Message");
    expect(input).toHaveClass("border-danger");
    expect(input).not.toHaveClass("border-color-two");
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
