import React, { PureComponent, useLayoutEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        BETKING: 40,
        '1XBET': 24,
        'SURE ODDS': 24,
        'BET NINJA': 17,
        'BETFUSE': 54,
        'FAST BET': 66,
    },
    {
        name: 'Feb',
        BETKING: 30,
        '1XBET': 13,
        'SURE ODDS': 13,
        'BET NINJA': 89,
        'BETFUSE': 10,
        'FAST BET': 72,
    },
    {
        name: 'Mar',
        BETKING: 23,
        '1XBET': 98,
        'SURE ODDS': 98,
        'BET NINJA': 67,
        'BETFUSE': 27,
        'FAST BET': 103,
    },
    {
        name: 'Apr',
        BETKING: 34,
        '1XBET': 39,
        'SURE ODDS': 59,
        'BET NINJA': 88,
        'BETFUSE': 19,
        'FAST BET': 58,
    },
    {
        name: 'May',
        BETKING: 18,
        '1XBET': 91,
        'SURE ODDS': 61,
        'BET NINJA': 88,
        'BETFUSE': 66,
        'FAST BET': 31,
    },
    {
        name: 'Jun',
        BETKING: 23,
        '1XBET': 38,
        'SURE ODDS': 29,
        'BET NINJA': 43,
        'BETFUSE': 72,
        'FAST BET': 99,
    },
    {
        name: 'July',
        BETKING: 34,
        '1XBET': 90,
        'SURE ODDS': 20,
        'BET NINJA': 92,
        'BETFUSE': 44,
        'FAST BET': 42,
    },
    {
        name: 'May',
        BETKING: 18,
        '1XBET': 33,
        'SURE ODDS': 90,
        'BET NINJA': 65,
        'BETFUSE': 20,
        'FAST BET': 45,
    },
    {
        name: 'Jun',
        BETKING: 23,
        '1XBET': 49,
        'SURE ODDS': 38,
        'BET NINJA': 33,
        'BETFUSE': 75,
        'FAST BET': 110,
    },
    {
        name: 'July',
        BETKING: 34,
        '1XBET': 33,
        'SURE ODDS': 57,
        'BET NINJA': 21,
        'BETFUSE': 90,
        'FAST BET': 27,
    },
    {
        name: 'Aug',
        BETKING: 18,
        '1XBET': 48,
        'SURE ODDS': 48,
        'BET NINJA': 21,
        'BETFUSE': 21,
        'FAST BET': 21,
    },
    {
        name: 'Sep',
        BETKING: 23,
        '1XBET': 38,
        'SURE ODDS': 38,
        'BET NINJA': 25,
        'BETFUSE': 25,
        'FAST BET': 25,
    },

];



const CustomLineChart = ({ height, selected }) => {

    // render() {
    const [width, setWidth] = useState(300);

    const colors = [
        '#3498db',
        '#e74c3c',
        '#2ecc71',
        '#9b59b6',
        '#f1c40f',
        '#34495e',
        '#1abc9c',
        '#e67e22',
        '#7f8c8d',
        '#95a5a6'
      ];


    useLayoutEffect(() => {
        const chart_parent = document.querySelector('.chart-parent');
        console.log(chart_parent.clientWidth);
        setWidth(chart_parent.clientWidth)
    },[window.innerWidth])

    return (
        // <ResponsiveContainer width={630} height={250}>
        <ResponsiveContainer width={width} minHeight={height ?? 250} >
            <LineChart
                width={'100%'}
                height={'100%'}
                data={data}
                margin={{
                    top: 15,
                    right: 30,
                    left: 20,
                    bottom: 15,
                }}

            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis axisLine={{ display: 'none' }} tick={{ fontSize: 12, fontWeight: 700 }} dataKey="name" />
                <YAxis axisLine={{ display: 'none' }} tick={{ fontSize: 12, fontWeight: 700 }} />
                <Tooltip />
                {/* <Legend /> */}

                {
                    selected?.map((key,idx) => 
                        <Line key={idx} strokeWidth={2} dot={false} type="monotone" dataKey={key} stroke={colors[idx]} />
                    )
                }

                {/* <Line strokeWidth={2} dot={false} type="monotone" dataKey="BETKING" stroke="#E5951A" /> */}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CustomLineChart
// }
