import React, { useEffect, useState, useMemo } from "react";
import ProjectTable from "./components/ProjectTable";
import Pagination from "./components/Pagination";
import "./App.css";

/**
 * The number of records to be displayed per page.
 * @type {number}
 */
const RECORDS_PER_PAGE = 5;

/**

 * The main App component which fetches Kickstarter project data,
 * displays them in a paginated table, and includes pagination controls.
 *
 * @component
 * @returns {JSX.Element}
 */
function App() {
  // State to hold the fetched project data.
  const [data, setData] = useState([]);
  
  // State to track the current pagination page.
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * Fetches Kickstarter project data from the provided endpoint.
   * On successful fetch, updates the `data` state.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/master/frontend-assignment.json"
        );

        const jsonData = await response?.json();
        
        // Update the state with fetched data
        if (Array.isArray(jsonData)) {
          setData(jsonData);
        } else {
          console.error("Unexpected data format: expected an array.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  
    fetchData();
  }, []);

  /**
   * Calculates the total number of pages based on the length of `data` and the records per page.
   * Memoized so it doesn't recalculate unless `data.length` changes.
   *
   * @type {number}
   */
  const totalPages = useMemo(() => {
    return data?.length > 0 ? Math.ceil(data.length / RECORDS_PER_PAGE) : 1;
  }, [data]);

  /**
   * Returns a subset of `data` to display on the current page.
   * @returns {Array<Object>} The paginated data subset.
   */
  const getPaginatedData = () => {
    const start = (currentPage - 1) * RECORDS_PER_PAGE;
    return data.slice(start, start + RECORDS_PER_PAGE);
  };

  return (
    <div className="container">
      <h1>Highly-Rated Kickstarter Projects</h1>
      {data.length > 0 ? (
        <>
          <ProjectTable data={getPaginatedData()} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;