import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Linechart() {
    const data = [
        { name: 'Mar 1', visitors: 300 },
        { name: 'Mar 5', visitors: 900 },
        { name: 'Mar 10', visitors: 800 },
        { name: 'Mar 15', visitors: 1200 },
        { name: 'Mar 20', visitors: 800 },
        { name: 'Mar 25', visitors: 600 },
        { name: 'Mar 30', visitors: 880 },
        { name: 'Mar 1', visitors: 600 },
        { name: 'Mar 1', visitors: 730 },
        { name: 'Mar 1', visitors: 1950 },
        { name: 'Mar 1', visitors: 700 },
        { name: 'Mar 1', visitors: 1100 },
        { name: 'Mar 1', visitors: 350 },
        { name: 'Mar 1', visitors: 1200 },
        { name: 'Mar 1', visitors: 600 },
        { name: 'Mar 1', visitors: 1600 },
        { name: 'Mar 1', visitors: 900 },
        { name: 'Mar 1', visitors: 600 },
        { name: 'Mar 1', visitors: 1700 },

    ];
    return (
        <div className='lg:w-3/4 w-full'>
            <ResponsiveContainer width="100%" height={300} className='border border-[#1D1D1D] rounded-lg'>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis
                        ticks={[200, 400, 800, 1200, 1600, 2000]}
                        domain={[0, 2000]}
                    />
                    <Tooltip />
                    <Line type="linear" dataKey="visitors" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}




