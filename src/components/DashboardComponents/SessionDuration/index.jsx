import styled from "styled-components";
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
} from "recharts";

const SessionDuration = (props) => {
    const data = props.data.sessions
    console.log(data)
    return(
        <AreaChart width={300}
                   height={300}
                   data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                   radius={5}
                   style={{background: "#FF0000"}}>
            {/*<defs>*/}
            {/*    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">*/}
            {/*        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>*/}
            {/*        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>*/}
            {/*    </linearGradient>*/}
            {/*    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">*/}
            {/*        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>*/}
            {/*        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>*/}
            {/*    </linearGradient>*/}
            {/*</defs>*/}
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="sessionLength" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    )
}

export default SessionDuration
