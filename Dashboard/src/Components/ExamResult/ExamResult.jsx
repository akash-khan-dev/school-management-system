import { useState } from "react";
import "./ExamResult.css";
const ExamResult = () => {
  const results = [
    {
      id: "#0021",
      examName: "Class Test",
      subject: "English",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0022",
      examName: "Class Test",
      subject: "English",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0023",
      examName: "Class Test",
      subject: "Chemistry",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0024",
      examName: "Class Test",
      subject: "English",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0025",
      examName: "Class Test",
      subject: "Chemistry",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0025",
      examName: "Class Test",
      subject: "Chemistry",
      grade: "D",
      percent: "70.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0025",
      examName: "Class Test",
      subject: "English",
      grade: "C",
      percent: "80.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0025",
      examName: "Class Test",
      subject: "English",
      grade: "B",
      percent: "99.00 > 100",
      date: "22/02/2019",
    },
    {
      id: "#0025",
      examName: "First Semester",
      subject: "English",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="result-table-container">
        <h2>All Exam Results</h2>
        {/* Search Filters */}
        <div className="search-container">
          <input type="text" placeholder="Search by Exam Name" />
          <input type="text" placeholder="Search by Subject" />
          <input type="date" />
          <button>Search</button>
        </div>
        <table className="result-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Exam Name</th>
              <th>Subject</th>
              <th>Grade</th>
              <th>Percent</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentResults.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.examName}</td>
                <td>{result.subject}</td>
                <td>{result.grade}</td>
                <td>{result.percent}</td>
                <td>{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from(
            { length: Math.ceil(results.length / resultsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ExamResult;
