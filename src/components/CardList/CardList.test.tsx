import { render, screen } from "@testing-library/react";
import CardList from "../CardList/CardList";
import { describe, test, expect,  beforeEach } from "vitest";

describe("CardList", () => {
  const mockData = [
    { id: 1, title: "iPhone", description: "Apple phone" },
    { id: 2, title: "Samsung", description: "Android phone" },
  ];

  test("renders items", () => {
    render(<CardList data={mockData} loading={false} error={null} />);

    expect(screen.getByText("iPhone")).toBeInTheDocument();
    expect(screen.getByText("Samsung")).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(<CardList data={[]} loading={false} error={null} />);

    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });

  test("shows loading", () => {
    render(<CardList data={[]} loading={true} error={null} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("shows error", () => {
    render(
      <CardList data={[]} loading={false} error="Failed to fetch" />
    );

    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });
});