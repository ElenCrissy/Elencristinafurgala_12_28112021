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
    position: relative;
    top: 10px;
    left: 10px;
    font-weight: bold;
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

/**
 * Returns DOM element of the DailyInfo bar chart
 * @param { Array.<{calories: Number, day: String, kilogram: Number}> } data
 * @param { String } data.calories
 * @param { String } data.day
 * @param { Number } data.kilogram
 * @return { JSX.Element }
 */

const DailyInfo = ({ data }) => {
    const dataIndex = Array.from(data.keys())
    return(
        <DailyInfoChart>
            <p>Activité quotidienne</p>
            <ResponsiveContainer
                width="100%"
                height="80%"
                radius={5}
            >
                <BarChart width="60%"
                          height={300}
                          data={data}
                          // padding={20}
                          margin={{ top: 40, right: 0, left: 30, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis
                        data={dataIndex}
                       tickLine={false}
                       tickFormatter={(number) => `${number+1}`}
                       scale="point"
                       padding={{ left: 9, right: 9 }}
                       fill="grey"
                       interval="preserveStart"/>
                    <YAxis
                        yAxisId={"kilo"}
                        dataKey="kilogram"
                        orientation="right"
                        height={700}
                        axisLine={false}
                        tickLine={false}
                        tickCount ={4}/>
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
                        iconSize={7}
                        height={50}
                        formatter={renderColorfulLegendText}
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

DailyInfo.propTypes = PropTypes.arrayOf(PropTypes.objectOf({
        calories: PropTypes.number,
        day: PropTypes.string,
        kilogram: PropTypes.number
}))

export default DailyInfo