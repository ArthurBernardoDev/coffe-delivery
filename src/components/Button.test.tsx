import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "./Button";

describe("button", () => {
  test("renders a primary button correctly", () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole("button", { name: /primary button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`backgroundColor: '$yellow'`);
  });

  test("renders a secondary button correctly", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole("button", { name: /secondary button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: '$base-button'`);
  });

  test("renders an icon button correctly", () => {
    render(<Button variant="icon">Icon Button</Button>);
    const button = screen.getByRole("button", { name: /icon button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: '$purple-dark'`);
  });

  test("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const button = screen.getByRole("button", { name: /clickable/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
