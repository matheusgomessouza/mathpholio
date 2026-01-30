/** @vitest-environment jsdom */
import { describe, expect, it, beforeEach, vi } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { useScreenSize } from "./useScreenSize";

describe("useScreenSize", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  it("returns current window.innerWidth after mount", async () => {
    const { result } = renderHook(() => useScreenSize());

    await waitFor(() => {
      expect(result.current).toBe(1024);
    });
  });

  it("updates when window is resized", async () => {
    const { result } = renderHook(() => useScreenSize());

    await waitFor(() => {
      expect(result.current).toBe(1024);
    });

    act(() => {
      window.innerWidth = 640;
      window.dispatchEvent(new Event("resize"));
    });

    await waitFor(() => {
      expect(result.current).toBe(640);
    });
  });

  it("stops listening on unmount", async () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useScreenSize());

    expect(addSpy).toHaveBeenCalledWith("resize", expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
  });
});
