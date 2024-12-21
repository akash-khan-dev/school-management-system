import { FaCalendarAlt } from "react-icons/fa";
import Breadcrumb from "../../BreadCrumb/BreadCrumb";
import "./Student.css";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";
import ExamResult from "../../ExamResult/ExamResult";
import CountingChart from "../../CountingChart/CountingChart";
import Calendar from "../../Calendar/Calendar";
import Notice from "../../Notice/Notice";

const Student = () => {
  const studentInfo = {
    profilePic: "https://via.placeholder.com/150", // Placeholder profile picture
    name: "Jessia Rose",
    gender: "Female",
    fatherName: "Fahim Rahman",
    motherName: "Jannatul Kazi",
    dob: "07.08.2006",
    religion: "Islam",
    fatherOccupation: "Graphic Designer",
    email: "jessiarose@gmail.com",
    admissionDate: "05.01.2019",
    studentClass: "2",
    section: "Pink",
    roll: "10005",
    address: "House #10, Road #6, Australia",
    phone: "+ 88 9856418",
  };
  return (
    <>
      <div>
        <Breadcrumb title={"Student Dashboard"} />
        <div className="student-card">
          {/* Profile Section */}
          <div className="student-header">
            <img
              src={studentInfo.profilePic}
              alt={`${studentInfo.name}'s Profile`}
              className="profile-pic"
            />
            <div className="student-name">
              <h2>{studentInfo.name}</h2>
              <p>{studentInfo.gender}</p>
            </div>
          </div>

          {/* Information Section */}
          <div className="student-info">
            <div className="info-item">
              <strong>Name:</strong> <span>Jessia Rose</span>
            </div>
            <div className="info-item">
              <strong>Gender:</strong> <span>Female</span>
            </div>
            <div className="info-item">
              <strong>Father Name:</strong> <span>Fahim Rahman</span>
            </div>
            <div className="info-item">
              <strong>Mother Name:</strong> <span>Jannatul Kazi</span>
            </div>
            <div className="info-item">
              <strong>Date Of Birth:</strong> <span>07.08.2006</span>
            </div>
            <div className="info-item">
              <strong>Religion:</strong> <span>Islam</span>
            </div>
            <div className="info-item">
              <strong>Father Occupation:</strong> <span>Graphic Designer</span>
            </div>
            <div className="info-item">
              <strong>E-Mail:</strong> <span>jessiarose@gmail.com</span>
            </div>
            <div className="info-item">
              <strong>Admission Date:</strong> <span>05.01.2019</span>
            </div>
            <div className="info-item">
              <strong>Class:</strong> <span>2</span>
            </div>
            <div className="info-item">
              <strong>Section:</strong> <span>Pink</span>
            </div>
            <div className="info-item">
              <strong>Roll:</strong> <span>10005</span>
            </div>
            <div className="info-item">
              <strong>Address:</strong>{" "}
              <span>House #10, Road #6, Australia</span>
            </div>
            <div className="info-item">
              <strong>Phone:</strong> <span>+ 88 9856418</span>
            </div>
          </div>
          <div className="student-dashboard-card">
            <div className="stat-box bg-primary text-white">
              <div className="stat-content">
                <div className="stat-icon">
                  <IoNewspaperOutline size={35} color="#000" />
                </div>
                <div>
                  <h3>Notice</h3>
                  <p>12</p>
                </div>
              </div>
            </div>
            <div className="stat-box bg-success text-white">
              <div className="stat-content">
                <div className="stat-icon">
                  <FaCalendarAlt size={35} color="#000" />
                </div>
                <div>
                  <h3>Event</h3>
                  <p>2</p>
                </div>
              </div>
            </div>
            <div className="stat-box bg-warning text-white">
              <div className="stat-content">
                <div className="stat-icon">
                  <AiOutlinePercentage size={35} color="#000" />
                </div>
                <div>
                  <h3>Parents</h3>
                  <p>50</p>
                </div>
              </div>
            </div>
          </div>
          {/* =======exam result=== */}
          <div>
            <ExamResult />
          </div>
          <div className="d-flex gap-4">
            <div className="w-50">
              <CountingChart />
            </div>
            <div className="w-50">
              <Calendar />
            </div>
          </div>
          <div>
            <Notice />
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
