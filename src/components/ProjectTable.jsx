import React from "react";

/**
 * Renders a table of project data. 
 * If no data is provided, displays a "No data available" message.
 *
 * @param {Object} props - Component props
 * @param {Array<Object>} props.data - An array of project objects.
 * Each object should contain "s.no", "percentage.funded", and "amt.pledged" fields.
 *
 * @returns {JSX.Element} The rendered table or a message if no data is available.
 */
const ProjectTable = ({ data }) => {
  // If data array is empty, display a fallback message.
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          // Use `index` as key if no unique identifier is present. Ideally, use a unique ID.
          <tr key={index}>
            <td>{item["s.no"]}</td>
            <td>{item["percentage.funded"]}</td>
            <td>{item["amt.pledged"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;