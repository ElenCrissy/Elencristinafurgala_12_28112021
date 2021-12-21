import styled from "styled-components";
import {
    AreaChart,
    XAxis,
    Label,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area
} from "recharts";
import PropTypes from "prop-types";
import Score from "../Score";

const CustomTooltip = ({active, payload}) => {
    if(active) {
        return (
            <StyledTooltip>
                {payload[0].value} min
            </StyledTooltip>
        )
    }
    return null
}

const StyledTooltip = styled.div`
  width: 40px;
  height: 25px;
  color: black;
  font-size: 8px;
  font-weight: bold;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Sessions = styled.div`
  width: 200px;
  p{
    font-size: 14px;
    margin: 0;
    position: absolute;
    z-index: 999;
    color: #FFFFFF;
    opacity: 0.5;
  }
`
const SessionDuration = (props) => {
    const data = props.data.sessions
    return(
        <Sessions>
            <p>Durée moyenne des sessions</p>
            <AreaChart width={200}
                       height={200}
                       data={data}
                       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                       radius={5}
                       style={{background: "#FF0000", borderRadius:"5px", position:"relative"}}>
                <defs>
                    <linearGradient id="colorLine" >
                        <stop offset="0%" stopColor="white" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="white" stopOpacity={0.8}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="day"
                       tickLine={false}
                       axisLine={false}
                       tick={{stroke: 'white', fontSize: '7px'}}
                       interval="preserveStart"/>
                <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" />
                <Tooltip cursor={{fill: '#f00'}}
                         content={<CustomTooltip/>}/>
                <Area
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="url(#colorLine)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="none"
                    style={{color: "white"}}
                    />
            </AreaChart>
        </Sessions>
    )
}

SessionDuration.propTypes = {
    props: PropTypes.number.isRequired,
}

export default SessionDuration
