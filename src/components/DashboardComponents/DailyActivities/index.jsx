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
import PropTypes from "prop-types";

const DailyInfoChart = styled.div`
  width: 100%;
  height: 300px;
  background-color: #FBFBFB;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  p{
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: bold;
    margin: 10px 0 0 10px;
  }
`
const StyledTooltip = styled.div`
  width: 40px;
  height: 60px;
  color: white;
  font-size: 8px;
  font-weight: normal;
  background-color: #E60000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span{
    text-align: center;
  }
`

const CustomTooltip = ({active, payload}) => {
    if(active) {
        return (
            <StyledTooltip>
                <span>{payload[0].value}kg</span>
                <span>{payload[1].value}kCal</span>
            </StyledTooltip>
        )
    }
    return null
}

const renderColorfulLegendText = (value) => {
    return <span style={{color: "grey" }}>{value}</span>;
};

const DailyActivities = ({ data }) => {
    const dataIndex = Array.from(data.keys())
    return(
        <DailyInfoChart>
            <p>Activité quotidienne</p>
            <ResponsiveContainer
                width="100%"
                height={250}
                radius={5}
            >
                <BarChart width="60%"
                          data={data}
                          margin={{ top: 50, right: 0, left: 30, bottom: 5 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        verticalFill={"#9B9EAC"}
                    />
                    <XAxis
                        data={dataIndex}
                       tickLine={false}
                       tickFormatter={(number) => `${number+1}`}
                       scale="point"
                       padding={{ left: 9, right: 9 }}
                       fill="grey"
                       interval="preserveStart"
                        dy={10}
                        tick={{stroke: "#9B9EAC", fontSize: "12px"}}
                    />
                    <YAxis
                        yAxisId={"kilo"}
                        dataKey="kilogram"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickCount ={4}
                        dx={10}
                        tick={{stroke: "#9B9EAC", fontSize: "12px"}}
                    />
                    <YAxis
                        yAxisId={"calo"}
                        dataKey="calories"
                        orientation="left"
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                        />
                    <Tooltip
                        cursor={{fill: 'red'}}
                        content={<CustomTooltip/>}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType={"circle"}
                        iconSize={7}
                        height={40}
                        formatter={renderColorfulLegendText}
                        wrapperStyle={{top: 20}}
                        />
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

DailyActivities.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        calories: PropTypes.number.isRequired,
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired
    }))
}

export default DailyActivities