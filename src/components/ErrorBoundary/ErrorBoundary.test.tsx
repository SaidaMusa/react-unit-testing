import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";
import { describe, test, expect, vi, beforeEach } from "vitest";
const ProblemChild = () => {
  throw new Error("Crash!");
};

describe("ErrorBoundary", () => {
  test("catches error", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});