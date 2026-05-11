import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { describe, test, expect, vi, beforeEach } from "vitest";

describe("Search Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders input", () => {
    render(<Search onSearch={() => {}} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("updates input value", () => {
    render(<Search onSearch={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "iphone" } });

    expect(input).toHaveValue("iphone");
  });

  test("saves to localStorage", () => {
    const onSearch = vi.fn();

    render(<Search onSearch={onSearch} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "macbook" } });
    fireEvent.click(button);

    expect(localStorage.getItem("search")).toBe("macbook");
    expect(onSearch).toHaveBeenCalledWith("macbook");
  });

  test("loads value from localStorage", () => {
    localStorage.setItem("search", "iphone");

    render(<Search onSearch={() => {}} />);

    expect(screen.getByRole("textbox")).toHaveValue("iphone");
  });
});