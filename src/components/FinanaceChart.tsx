"use client";

import Image from "next/image";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 3000,
  },
  {
    name: "Mar",
    income: 5000,
    expense: 2500,
  },
  {
    name: "Apr",
    income: 5500,
    expense: 6500,
  },
  {
    name: "May",
    income: 2200,
    expense: 1000,
  },
  {
    name: "Jun",
    income: 8800,
    expense: 4400,
  },
  {
    name: "Jul",
    income: 7000,
    expense: 4000,
  },
  {
    name: "Aug",
    income: 4000,
    expense: 3000,
  },
  {
    name: "Sep",
    income: 3000,
    expense: 2500,
  },
  {
    name: "Oct",
    income: 4000,
    expense: 2500,
  },
  {
    name: "Nov",
    income: 2000,
    expense: 1500,
  },
  {
    name: "Dec",
    income: 5000,
    expense: 3000,
  },
];

const FinanaceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="USD"
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
            tickMargin={20}
          />
          <YAxis axisLine={false} tick={{ fill: "#D1D5DB" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanaceChart;
