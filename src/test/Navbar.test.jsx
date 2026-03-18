import { describe, expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import Navbar from "../components/layout/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  // render a new Navbar for each test so tests run independently
  beforeEach(() => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>,
    );
  });

  test("navlink for cards page is rendered properly", () => {
    const navlink = screen.getByText("Cards");
    expect(navlink).toBeInTheDocument();
  });

  test("the React router link goes to the correct url", () => {
    const link = screen.getByRole("link", { name: /cards/i });
    expect(link).toHaveAttribute("href", "/cards");
  });
});
