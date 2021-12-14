import styled from "styled-components";
import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    Bar
} from "recharts";

const DailyInfoChart = styled.div`
  width: 100%;
  height: 300px;
  p{
    font-weight: bold;
  }
`

const StyledTooltip = styled.div`
    background-color: #E60000;
`

const CustomTooltip = (active, calories, weight) => {
    if(active) {
        // console.log(weight)
        return (
            <StyledTooltip>

            </StyledTooltip>
        )
    }
    return null
}

const DailyInfo= (props) => {
    const data = props.data
    const dataIndex = Array.from(data.keys())
    // console.log(data)
    // data.forEach(el => {
    //     let val = el.calories
    //     val = val/0.5
    //     console.log(val)
    //     el.calories = val
    //     return el.calories
    // })
    // console.log(data)

    return(
        <DailyInfoChart>
            <p>Activité quotidienne</p>
            <ResponsiveContainer
                width="100%"
                height="80%"
                radius={5}
            >
                <BarChart width="90%" height="100%" data={data}
                          padding={20}
                          style={{background: "#FBFBFB"}}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis data={dataIndex}
                           tickLine={false}
                           tickFormatter={(number) => `${number+1}`}/>
                    <YAxis
                        dataKey="kilogram"
                        orientation="right"
                        height={700}
                        domain={[65, 75]}
                        axisLine={false}
                        tickLine={false}/>
                    <YAxis
                        dataKey="calories"
                        height={700}
                        orientation="left"
                        domain={[65, 75]}
                        axisLine={false}
                        tickLine={false}
                        />
                    <Tooltip cursor={{fill: "rgba(196, 196, 196, 0.5)"}} content={<CustomTooltip/>}/>
                    <Legend
                        verticalAlign="top"
                        height={36}
                        iconType={"circle"}
                        iconSize={7}/>
                    <Bar
                        dataKey="kilogram"
                        name="Poids (kg)"
                        fill="#282D30"
                        radius={[5, 5, 0, 0]}
                        barSize={7}/>
                    <Bar
                        dataKey="calories"
                        name="Calories (kCal)"
                        fill="#E60000"
                        radius={[5, 5, 0, 0]}
                        barSize={7}/>
                </BarChart>


            </ResponsiveContainer>
        </DailyInfoChart>
    )
}

export default DailyInfo