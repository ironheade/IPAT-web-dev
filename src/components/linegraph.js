import { NumberInput, Table } from '@mantine/core';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const startData = [
    {
        name: 'Page A',
        uv: 40,
        pv: 24,
        amt: 24,
    },
    {
        name: 'Page B',
        uv: 30,
        pv: 18,
        amt: 22,
    },
    {
        name: 'Page C',
        uv: 20,
        pv: 98,
        amt: 22,
    },
    {
        name: 'Page D',
        uv: 27,
        pv: 39,
        amt: 20,
    },
    {
        name: 'Page E',
        uv: 19,
        pv: 40,
        amt: 28,
    },
    {
        name: 'Page F',
        uv: 29,
        pv: 38,
        amt: 50,
    },
    {
        name: 'Page G',
        uv: 34,
        pv: 43,
        amt: 20,
    },
];



export default function Linegraph() {
    const [data, setData] = useState(startData)

    function handleinput(value, name, key){
        const newData = [...data]
        const index = newData.findIndex(item => item.name === name)
        const newObject = {...newData[index]}
        newObject[key] = value
        newData[index]=newObject
        setData(newData)
    }

    return (
        <>
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amt" stroke="#f00" />
            </LineChart>

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>uv</th>
                        <th>pv</th>
                        <th>amt</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td><NumberInput onChange={(newValue)=> handleinput(newValue, item.name, "uv")} value={item.uv}/></td>
                            <td><NumberInput onChange={(newValue)=> handleinput(newValue, item.name, "pv")} value={item.pv}/></td>
                            <td><NumberInput onChange={(newValue)=> handleinput(newValue, item.name, "amt")} value={item.amt}/></td>
                        </tr>
                        )}
                </tbody>
            </Table>
        </>
    );
}
