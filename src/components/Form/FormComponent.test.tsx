/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import React from "react";
import { FormComponent } from "./FormComponent";

// Mock dependencies
vi.mock("@/components/Form/FormField/FormFieldComponent", () => ({
  FormFieldComponent: (props: any) => (
    <div>
      <input
        data-testid={props.name}
        placeholder={props.placeholder}
        value={props.value || ""}
        onChange={props.onChange || (() => {})}
        {...props.register(props.name)}
      />
      {props.children}
    </div>
  ),
}));

vi.mock("@/components/Form/TextArea/TextAreaComponent", () => ({
  TextAreaComponent: (props: any) => (
    <div>
      <textarea
        data-testid={props.name}
        placeholder={props.placeholder}
        value={props.value || ""}
        onChange={props.onChange || (() => {})}
        {...props.register(props.name)}
      />
      {props.children}
    </div>
  ),
}));

vi.mock("@/types/interfaces", () => ({
  // Minimal mock for ContactFormProps
  ContactFormProps: {},
}));

vi.mock("@/components/Form/types/types", () => ({
  ContactSchema: {},
}));

vi.mock("@hookform/resolvers/zod", () => ({
  // Always validate successfully
  zodResolver: () => (values: any) => ({ values, errors: {} }),
}));

const sendFormMock = vi.fn();

// Also mock emailjs/browser in case that's the import
vi.mock("emailjs/browser", () => ({
  default: {
    sendForm: sendFormMock,
  },
}));

const OLD_ENV = { ...process.env };

describe("FormComponent", () => {
  beforeEach(() => {
    Object.assign(process.env, {
      NEXT_PUBLIC_EMAILJS_SERVICE_ID:
        process.env?.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "test_service",
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
        process.env?.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "test_service",
    });
  });

  afterEach(() => {
    process.env = { ...OLD_ENV };
    vi.clearAllMocks();
    cleanup();
  });

  it("renders all form fields and submit button", () => {
    render(<FormComponent />);
    expect(screen.getByTestId("name")).not.toBeNull();
    expect(screen.getByTestId("email")).not.toBeNull();
    expect(screen.getByTestId("message")).not.toBeNull();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).not.toBeNull();
  });

  it("shows loading state when submitting", async () => {
    // Use a promise that we control to simulate the API call
    let resolveEmailJS: (value: unknown) => void = () => {};
    const emailJSPromise = new Promise((resolve) => {
      resolveEmailJS = resolve;
    });

    sendFormMock.mockReturnValue(emailJSPromise);

    render(<FormComponent />);

    // Fill out the form
    fireEvent.input(screen.getByTestId("name"), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByTestId("email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.input(screen.getByTestId("message"), {
      target: { value: "Hello" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    // Verify loading state is shown
    await waitFor(() => {
      expect(screen.getByText("Sending")).not.toBeNull();
    });

    // Verify loading state is removed
    // Resolve the promise to complete the submission
    resolveEmailJS({ status: 200 }); // Add proper success response
  });

  it("does not call emailjs if env vars are missing", async () => {
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = "";
    render(<FormComponent />);
    fireEvent.input(screen.getByTestId("name"), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByTestId("email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.input(screen.getByTestId("message"), {
      target: { value: "Hello" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(sendFormMock).not.toHaveBeenCalled();
    });
  });
});
