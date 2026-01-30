/** @vitest-environment jsdom */
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TextAreaComponent } from "./TextAreaComponent";
import * as interfaces from "@/types/interfaces";

describe("TextAreaComponent", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders textarea with placeholder and register props", () => {
    const registerMock = vi.fn(() => ({
      name: "message",
      onChange: vi.fn(),
      onBlur: vi.fn(),
      ref: vi.fn(),
    }));
    const register =
      registerMock as unknown as interfaces.FormFieldProps["register"];
    render(
      <TextAreaComponent
        name="message"
        register={register}
        error={undefined as any}
        placeholder="Type here"
      />
    );

    expect(registerMock).toHaveBeenCalledWith("message", { required: true });
    const textarea = screen.getByPlaceholderText("Type here");
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
    expect(textarea).toHaveAttribute("name", "message");
    expect(textarea.className).toContain("border-color-two");
  });

  it("renders error message and error class when error exists", () => {
    const registerMock = vi.fn(() => ({
      name: "message",
      onChange: vi.fn(),
      onBlur: vi.fn(),
      ref: vi.fn(),
    }));
    const register =
      registerMock as unknown as interfaces.FormFieldProps["register"];
    render(
      <TextAreaComponent
        name="message"
        register={register}
        error={{ message: "Required" } as any}
        placeholder="Type here"
      />
    );

    const textarea = screen.getByPlaceholderText("Type here");
    expect(textarea.className).toContain("border-danger");
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
