import "./Analytics.css";
import React from "react";

import {
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
  LineChart,
  YAxis,
  Line,
} from "recharts";

const Analytics = ({
  chart_i,
  chart_ii,
  chart_iii,
  title,
  value,
  illustration,
}) => {
  const data = [
    {
      name: "maths",
      Marks: 40,
      Maxmarks: 80,
    },
    {
      name: "Physics",
      Marks: 30,
      Maxmarks: 98,
    },
    {
      name: "chemistry",
      Marks: 70,
      Maxmarks: 95,
    },
    {
      name: "Biology",
      Marks: 48,
      Maxmarks: 92,
    },
  ];
  const data02 = [
    {
      YourMarks: 40,
      MaxMarks: 80,
    },
    {
      YourMarks: 30,
      MaxMarks: 98,
    },
    {
      YourMarks: 70,
      MaxMarks: 95,
    },
    {
      YourMarks: 48,
      MaxMarks: 92,
    },
  ];

  const data03 = [
    {
      name: "Group A",
      value: 40,
    },
    {
      name: "Group B",
      value: 30,
    },
    {
      name: "Group C",
      value: 70,
    },
    {
      name: "Group D",
      value: 48,
    },
  ];
  const data04 = [
    {
      name: "Group A",
      value: 80,
    },
    {
      name: "Group B",
      value: 98,
    },
    {
      name: "Group C",
      value: 95,
    },
    {
      name: "Group D",
      value: 92,
    },
  ];
  return (
    <div className="analytics">
      {chart_i && (
        <>
          <header>
            <span className="Maxmarks">Marks:</span>
            <span className="Marks">MarksinSubjects:</span>
          </header>

          <BarChart className="chart" width={250} height={210} data={data}>
            <CartesianGrid strokeDasharray="100 10" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Maxmarks" fill="#00464e" />
            <Bar dataKey="Marks" fill="#810551" />
          </BarChart>
        </>
      )}

      {chart_ii && (
        <LineChart
          width={260}
          height={220}
          data={data02}
          margin={{ right: 10, top: 10 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="MaxMarks" stroke="#810551" />
          <Line type="monotone" dataKey="YourMarks" stroke="#00464e" />
        </LineChart>
      )}

      {chart_iii && (
        <PieChart width={300} height={300}>
          <Pie
            data={data03}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#00464e"
          />
          <Pie
            data={data04}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#810551"
            label
          />
        </PieChart>
      )}

      {title && (
        <>
          <h1 className="title">{title}</h1>
          <h2 className="value">{value}</h2>
          <h2 className="extra-text">
            People are loving your content
            <br />
            🙌🎉🎆
          </h2>

          <img src={illustration} alt="illus" className="illustration" />
        </>
      )}
    </div>
  );
};

export default Analytics;
