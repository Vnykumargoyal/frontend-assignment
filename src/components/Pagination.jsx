import React, { memo } from "react";

/**
 * Pagination component that allows navigating between pages of a paginated list.
 *
 * @param {Object} props
 * @param {number} props.currentPage - The current active page number.
 * @param {number} props.totalPages - The total number of pages available.
 * @param {Function} props.setCurrentPage - A state setter function to update the current page.
 * @returns {JSX.Element} The rendered Pagination component.
 */
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  
  /**
   * Handles navigation to the previous page.
   * Decrements the `currentPage` if not already on the first page.
   */
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * Handles navigation to the next page.
   * Increments the `currentPage` if not already on the last page.
   */
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button 
        onClick={handlePrevious} 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      <span>
        Page {currentPage} of {totalPages}
      </span>
      
      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default memo(Pagination);