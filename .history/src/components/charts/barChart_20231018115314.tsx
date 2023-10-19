import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarCharts = () => {
    
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      ur: 400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      ur: 400,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      ur: 400,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      ur: 400,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      ur: 400,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      ur: 400,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      ur: 400,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="bg-white  flex flex-col  w-full  rounded-md py-4 ">
      <div className='px-4 mb-4'>
      <p className="text-[#A1A1A1] font-montserrat text-[12px] tracking-[0.3px] font-[500]">TOTAL FEES</p>
      <h2 className="font-montserrat font-semibold tex-[18px] tracking-[0.5px] ">₦12,345.00</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            right: 16,
            left: 16,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="ur" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>

  )
}

export default BarCharts