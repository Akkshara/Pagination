import React, { useState } from 'react';

const dummyData = [
  { id: 1, name: 'Aarav Sharma', age: 28 },
  { id: 2, name: 'Priya Patel', age: 32 },
  { id: 3, name: 'Ravi Kumar', age: 45 },
  { id: 4, name: 'Sneha Reddy', age: 22 },
  { id: 5, name: 'Arjun Verma', age: 30 },
  { id: 6, name: 'Neha Iyer', age: 25 },
  { id: 7, name: 'Vikram Singh', age: 35 },
  { id: 8, name: 'Sanya Mehta', age: 40 },
  { id: 9, name: 'Rohit Sharma', age: 33 },
  { id: 10, name: 'Ananya Gupta', age: 27 },
  { id: 11, name: 'Karan Joshi', age: 50 },
  { id: 12, name: 'Maya Kapoor', age: 29 },
  { id: 13, name: 'Ishaan Patil', age: 34 },
  { id: 14, name: 'Aditi Deshmukh', age: 41 },
  { id: 15, name: 'Yash Yadav', age: 38 },
  { id: 16, name: 'Ananya Chawla', age: 23 },
  { id: 17, name: 'Siddharth Agarwal', age: 31 },
  { id: 18, name: 'Meera Nair', age: 26 },
  { id: 19, name: 'Vishal Rao', age: 32 },
  { id: 20, name: 'Simran Singh', age: 28 },
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

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((page) => (
      <button
        key={page}
        className={`px-4 py-2 mx-1 rounded-lg ${
          page === currentPage
            ? 'bg-gray-600 text-white'
            : 'bg-gray-200 text-gray-800 border border-gray-400 hover:bg-gray-300'
        } transition duration-300`}
        onClick={() => handleClick(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6 border-b pb-3 border-gray-300">
          User Data Table
        </h2>
        <table className="w-full table-auto text-left mb-6">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="py-4 px-6 font-semibold">ID</th>
              <th className="py-4 px-6 font-semibold">Name</th>
              <th className="py-4 px-6 font-semibold">Age</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'
                } hover:bg-gray-200`}
              >
                <td className="py-4 px-6">{row.id}</td>
                <td className="py-4 px-6">{row.name}</td>
                <td className="py-4 px-6">{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center space-x-2">
          <button
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            } transition duration-300`}
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {renderPageNumbers()}

          <button
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            } transition duration-300`}
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationTable;
