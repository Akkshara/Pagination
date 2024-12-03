import React, { useState } from 'react';

// Dummy data for the table
const dummyData = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 32 },
  { id: 3, name: 'Sam Johnson', age: 45 },
  { id: 4, name: 'Sara Williams', age: 22 },
  { id: 5, name: 'David Brown', age: 30 },
  { id: 6, name: 'Emily Davis', age: 25 },
  { id: 7, name: 'Michael Wilson', age: 35 },
  { id: 8, name: 'Sophia Lee', age: 40 },
  { id: 9, name: 'James Harris', age: 33 },
  { id: 10, name: 'Olivia Clark', age: 27 },
  { id: 11, name: 'Liam Lewis', age: 50 },
  { id: 12, name: 'Mia Young', age: 29 },
  { id: 13, name: 'Ethan Walker', age: 34 },
  { id: 14, name: 'Ava Hall', age: 41 },
  { id: 15, name: 'Lucas Allen', age: 38 },
  { id: 16, name: 'Isabella Scott', age: 23 },
  { id: 17, name: 'Henry Adams', age: 31 },
  { id: 18, name: 'Amelia Nelson', age: 26 },
  { id: 19, name: 'Sebastian Carter', age: 32 },
  { id: 20, name: 'Charlotte Mitchell', age: 28 },
];

const PaginationTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    const visiblePages = pageNumbers.filter((page) => {
      return page === 1 || page === totalPages || (page >= start && page <= end);
    });

    const result = [];
    if (visiblePages[0] !== 1) {
      result.push('...');
    }
    result.push(...visiblePages);
    if (visiblePages[visiblePages.length - 1] !== totalPages) {
      result.push('...');
    }

    return result.map((page, index) =>
      page === '...' ? (
        <span key={index} className="ellipsis">...</span>
      ) : (
        <button
          key={index}
          className={`page-button ${page === currentPage ? 'active' : ''}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div>
      <table border="1" style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className="page-button"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {renderPageNumbers()}

        <button
          className="page-button"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
