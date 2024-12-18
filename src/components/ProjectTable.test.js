import { render, screen } from "@testing-library/react";
import ProjectTable from "./ProjectTable";

/**
 * Mock data for testing the ProjectTable component.
 */
const mockData = [
  { "s.no": 0, "percentage.funded": 186, "amt.pledged": 15823 },
  { "s.no": 1, "percentage.funded": 120, "amt.pledged": 10500 },
];

describe("ProjectTable Component", () => {

  /**
   * Tests that the table headers are rendered correctly.
   * Ensures the presence of "S.No.", "Percentage Funded", and "Amount Pledged".
   */
  test("renders table headers correctly", () => {
    render(<ProjectTable data={mockData} />);

    // Verify that the expected column headers appear in the document.
    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
    expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
  });

  /**
   * Tests that the correct number of rows (including the header row) is rendered.
   * We have 2 data rows, plus 1 header row, totaling 3 rows.
   */
  test("renders correct number of rows", () => {
    render(<ProjectTable data={mockData} />);

    // Get all rows and verify the count: one header row + two data rows = three.
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(3);
  });

  /**
   * Tests that the correct data from `mockData` is displayed in the table.
   * Ensures that the cell values match the expected values from mockData.
   */
  test("displays correct data", () => {
    render(<ProjectTable data={mockData} />);

    // Verify that data from the first row is correctly displayed.
    // "S.No." 0-based indexing in mock data but visually it may be represented as 1; 
    // This depends on how data is shown in the component. If it's direct from "s.no", then it should be "0".
    // For the sake of this test, we're assuming the component prints "s.no" as is.
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("186")).toBeInTheDocument();
    expect(screen.getByText("15823")).toBeInTheDocument();
  });

});