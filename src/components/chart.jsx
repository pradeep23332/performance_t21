import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 350 },
  { name: 'Mar', value: 100 },
  // Add more data points as needed
];

const MonthlyProgress = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full p-3 text-center bg-white rounded-lg shadow-md shadow-slate-300">
      <span className="font-semibold text-slate-900 text-[18px]">Monthly Progress</span>
      <div className="flex flex-row items-center justify-center mt-3">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyProgress;
