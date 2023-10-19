import React from 'react'

const BarCharts = () => {
  return (
    <div className="bg-white  flex flex-col items-center justify-center w-full px-5 rounded-md py-6 ">
        <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
    </div>

  )
}

export default BarCharts