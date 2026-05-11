import { render, screen } from "@testing-library/react";
import Card from "../Card/Card";
import { describe, test, expect, vi, beforeEach } from "vitest";
describe("Card", () => {
  test("renders props", () => {
    render(
      <Card title="iPhone" description="Apple device" />
    );

    expect(screen.getByText("iPhone")).toBeInTheDocument();
    expect(screen.getByText("Apple device")).toBeInTheDocument();
  });

  test("handles missing props", () => {
    render(<Card title="" description="" />);

    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});