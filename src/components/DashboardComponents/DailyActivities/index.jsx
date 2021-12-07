import styled from "styled-components";
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from "recharts";

const DailyActivities = (props) => {
    const data = props.data
    console.log(data)

    return(
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={props}>
                <Area dataKey="calories"/>
                <XAxis dataKey="day"/>
                <YAxis dataKey="kilograms"/>
                <Tooltip/>
                <CartesianGrid/>
            </AreaChart>


        </ResponsiveContainer>
    )
}

export default DailyActivities