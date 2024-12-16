import "./Notice.css";
const Notice = () => {
  const notices = [
    {
      title: "Meeting Tomorrow",
      date: "Dec 17, 2024",
      author: "John Doe",
      description:
        "There will be a meeting tomorrow at 3:00 PM. All members must attend.",
    },
    {
      title: "Holiday Notice",
      date: "Dec 20, 2024",
      author: "Jane Smith",
      description: "The office will be closed on Dec 25th for the holidays.",
    },
    {
      title: "Urgent Announcement",
      date: "Dec 15, 2024",
      author: "Admin",
      description:
        "The server will be down for maintenance from 10:00 PM tonight.",
    },
    {
      title: "Project Deadline",
      date: "Dec 22, 2024",
      author: "Alice Johnson",
      description:
        "The project deadline has been extended to December 25, 2024.",
    },
    {
      title: "Team Outing",
      date: "Dec 18, 2024",
      author: "Bob Brown",
      description:
        "We are organizing a team outing next week. Please confirm your attendance.",
    },
    {
      title: "Security Update",
      date: "Dec 10, 2024",
      author: "Security Team",
      description:
        "A security patch will be applied to the system on Dec 12th.",
    },
  ];
  return (
    <>
      <div className="notice-board-container">
        <h2 className="notice-board-heading">Notices</h2>
        <div className="notice-board">
          {notices.slice(0, 5).map((notice, index) => (
            <div key={index} className="notice">
              <h3 className="notice-title">{notice.title}</h3>
              <p className="notice-date">{notice.date}</p>
              <p className="notice-author">By: {notice.author}</p>
              <p className="notice-description">{notice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notice;
