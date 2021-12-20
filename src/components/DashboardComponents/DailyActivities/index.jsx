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
  background-color: #FBFBFB;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  p{
    position: relative;
    top: 10px;
    left: 10px;
    font-weight: bold;
    //margin-left: 3%;
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
                <BarChart width="60%"
                          height="60%"
                          data={data}
                          padding={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis data={dataIndex}
                           tickLine={false}
                           tickFormatter={(number) => `${number+1}`}
                           scale="point"
                           padding={{ left: 9, right: 9 }}
                           fill="grey"/>
                    <YAxis
                        yAxisId={"kilo"}
                        dataKey="kilogram"
                        orientation="right"
                        height={700}
                        axisLine={false}
                        tickLine={false}/>
                    <YAxis
                        yAxisId={"calo"}
                        dataKey="calories"
                        height={700}
                        orientation="left"
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                        />
                    <Tooltip cursor={{fill: "rgba(196, 196, 196, 0.5)"}} content={<CustomTooltip/>}/>
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType={"circle"}
                        iconSize={7}/>
                    <Bar
                        yAxisId={"kilo"}
                        dataKey="kilogram"
                        name="Poids (kg)"
                        fill="#282D30"
                        radius={[5, 5, 0, 0]}
                        barSize={7}/>
                    <Bar
                        yAxisId={"calo"}
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