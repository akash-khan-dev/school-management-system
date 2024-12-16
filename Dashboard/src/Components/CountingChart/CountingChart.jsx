import "./CountingChart.css";
import { Tooltip, Cell, PieChart, Pie, Legend } from "recharts";

const CountingChart = () => {
  const data = [
    { name: "Week 1", Earnings: 75000, Expenses: 20000 },
    { name: "Week 2", Earnings: 60000, Expenses: 15000 },
    { name: "Week 3", Earnings: 50000, Expenses: 12000 },
    { name: "Week 4", Earnings: 80000, Expenses: 25000 },
  ];
  const maleCount = 1000;
  const femaleCount = 400;

  const COLORS = ["#4caf50", "#f06292"];
  const maleFemale = [
    { name: "Male", value: maleCount },
    { name: "Female", value: femaleCount },
  ];
  return (
    <>
      <div className="chart-container">
        <h3>Students</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={maleFemale}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </div>
    </>
  );
};

export default CountingChart;
