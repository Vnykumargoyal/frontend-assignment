import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

/**
 * Test suite for the Pagination component.
 */
describe("Pagination Component", () => {
  
  /**
   * Tests that the Pagination component renders expected elements:
   * - "Previous" button
   * - "Next" button
   * - Correct page status (e.g., "Page 1 of 3").
   */
  test("renders pagination buttons and page info correctly", () => {
    const setCurrentPage = jest.fn();
    render(<Pagination currentPage={1} totalPages={3} setCurrentPage={setCurrentPage} />);
  
    // Verify that the "Previous" and "Next" buttons are present
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();

    // Verify that the page info is displayed correctly
    expect(screen.getByText("Page 1 of 3")).toBeInTheDocument();
  });

  /**
   * Tests that the "Previous" button is disabled when the current page is the first page.
   * This ensures the user cannot go back past page 1.
   */
  test("previous button is disabled on the first page", () => {
    const setCurrentPage = jest.fn();
    render(<Pagination currentPage={1} totalPages={3} setCurrentPage={setCurrentPage} />);
    
    // The "Previous" button should be disabled on the first page
    expect(screen.getByText("Previous")).toBeDisabled();
  });

  /**
   * Tests that the "Next" button is disabled on the last page.
   * This ensures the user cannot advance beyond the final page.
   */
  test("next button is disabled on the last page", () => {
    const setCurrentPage = jest.fn();
    render(<Pagination currentPage={3} totalPages={3} setCurrentPage={setCurrentPage} />);
    
    // The "Next" button should be disabled on the last page
    expect(screen.getByText("Next")).toBeDisabled();
  });

  /**
   * Tests the click event on the "Next" button.
   * Ensures that clicking "Next" calls the setCurrentPage function with the correct new page number.
   */
  test("clicking next calls setCurrentPage with the next page number", () => {
    const setCurrentPage = jest.fn();
    render(<Pagination currentPage={1} totalPages={3} setCurrentPage={setCurrentPage} />);
    
    // Fire a click event on the "Next" button
    fireEvent.click(screen.getByText("Next"));
    
    // Verify that setCurrentPage was called with the updated page number
    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });
});