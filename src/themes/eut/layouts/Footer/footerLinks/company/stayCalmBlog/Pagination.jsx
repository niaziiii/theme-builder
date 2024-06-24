"use client"


export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Handle page changes
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  // Generate page buttons
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        className={`px-2 py-1 mr-2 text-lime-500 hover:text-lime-300 ${
          currentPage === i ? ' text-gray-400' : ''
        }`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center mt-4">
      {/* <button
        className={`px-2 py-1 disabled:opacity-50 mr-2 text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          currentPage === 1 ? 'bg-blue-600 text-white disabled:cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button> */}
      {pageButtons}
      {/* <button
        className={`px-2 py-1 disabled:opacity-50 text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          currentPage === totalPages ? 'bg-blue-600 text-white disabled:cursor-not-allowed' : ''
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button> */}
    </div>
  );
};

export default Pagination;
