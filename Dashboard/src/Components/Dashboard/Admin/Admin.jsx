import "./Admin.css";
import { FaUsers } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Notice from "../../Notice/Notice";
import Calendar from "../../Calendar/Calendar";
import CountingChart from "../../CountingChart/CountingChart";
const Admin = () => {
  const data = [
    { name: "Week 1", Earnings: 75000, Expenses: 20000 },
    { name: "Week 2", Earnings: 60000, Expenses: 15000 },
    { name: "Week 3", Earnings: 50000, Expenses: 12000 },
    { name: "Week 4", Earnings: 80000, Expenses: 25000 },
  ];
  const expensesData = [
    {
      name: "Page A",
      pv: 5400,
      uv: 4000,
      py: 3000,
    },
  ];

  return (
    <>
      <div className="stats-container">
        <div className="stat-box bg-primary text-white">
          <div className="stat-content">
            <div className="stat-icon">
              <PiStudentBold size={35} color="#000" />
            </div>
            <div>
              <h3>Students</h3>
              <p>120</p>
            </div>
          </div>
        </div>
        <div className="stat-box bg-success text-white">
          <div className="stat-content">
            <div className="stat-icon">
              <FaUsers size={35} color="#000" />
            </div>
            <div>
              <h3>Teachers</h3>
              <p>25</p>
            </div>
          </div>
        </div>
        <div className="stat-box bg-warning text-white">
          <div className="stat-content">
            <div className="stat-icon">
              <FaUserFriends size={35} color="#000" />
            </div>
            <div>
              <h3>Parents</h3>
              <p>50</p>
            </div>
          </div>
        </div>
        <div className="stat-box bg-danger text-white">
          <div className="stat-content">
            <div className="stat-icon">
              <FaMoneyBill size={35} color="#000" />
            </div>
            <div>
              <h3>Classes</h3>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="earnings-chart-container">
            <h3>Earning</h3>
            <div className="info-boxes">
              <div className="info-box">
                <div className="icon total"></div>
                <div>
                  <h4>Total Collection</h4>
                  <p>৳75,000</p>
                </div>
              </div>
              <div className="info-box">
                <div className="icon free"></div>
                <div>
                  <h4>Fees Collection</h4>
                  <p>৳15,000</p>
                </div>
              </div>

              <div>
                <h4>Date Range</h4>
                <select className="date-select">
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>

            <div className="chart-area">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Earnings"
                    stroke="rgb(127 200 154)"
                    activeDot={{ r: 8 }}
                    dot={{ fill: "rgb(127 200 154)", strokeWidth: 2, r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Expenses"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    dot={{ fill: "#8884d8", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="express_chart">
            <div>
              <h3>Express</h3>
              <div>
                <div className="expense-box">
                  <div className="expense-item">
                    <div>
                      <strong>Jan 2019:</strong>{" "}
                    </div>
                    <div>
                      <span className="expense-amount ">$15,000</span>
                    </div>
                    <div className="first"></div>
                  </div>
                  <div className="expense-item">
                    <div>
                      <strong>Feb 2019:</strong>{" "}
                    </div>
                    <div>
                      <span className="expense-amount">$10,000</span>
                    </div>
                    <div className="second"></div>
                  </div>
                  <div className="expense-item">
                    <div>
                      <strong>Mar 2019:</strong>{" "}
                    </div>
                    <div>
                      <span className="expense-amount">$8,000</span>
                    </div>
                    <div className="third"></div>
                  </div>
                </div>
              </div>
            </div>
            <BarChart width={330} height={328} data={expensesData}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
              <Bar dataKey="py" fill="#505030" />
            </BarChart>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <CountingChart />
        </div>
        <div className="col-lg-7">
          <Notice />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default Admin;
