import styled from "styled-components";
import {
    LineChart,
    XAxis,
    CartesianGrid,
    Tooltip,
    Line,
} from "recharts";
import PropTypes from "prop-types";

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
  width: 35%;
  p{
    width: 100px;
    font-size: 14px;
    margin: 20px;
    position: absolute;
    z-index: 999;
    color: #FFFFFF;
    opacity: 0.5;
  }
`

/**
 * Returns DOM element of the Session Duration line chart
 * @param { Object } data
 * @param { Number } data.userId
 * @param { Array.<{day : (String|Number), sessionLength: Number}> } data.sessions
 * @return { JSX.Element }
 */

const SessionDuration = ({ data }) => {
    const sessions = data.sessions
    if(sessions != undefined){
        sessions.forEach(session => {
            if(session.day === 1) {
                return session.day = "L"
            }
            if(session.day === 2 || session.day === 3) {
                return session.day = "M"
            }
            if(session.day === 4) {
                return session.day = "J"
            }
            if(session.day === 5) {
                return session.day = "V"
            }
            if(session.day === 6) {
                return session.day = "S"
            }
            if(session.day === 7) {
                return session.day = "D"
            }
            if(session.day === 8) {
                return session.day = ""
            }
            return session
        })
    }

    return(
        <Sessions>
            <p>Durée moyenne des sessions</p>
            <LineChart width={235}
                       height={200}
                       data={sessions}
                       margin={{ top: 40, right: 0, left: 0, bottom: 5 }}
                       radius={5}
                       style={{background: "#FF0000", borderRadius:"5px"}}>
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
                       style={{opacity : 0.7}}
                       interval="preserveStart"
                >
                    {/*<Label position="center"></Label>*/}
                </XAxis>
                <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" />
                <Tooltip
                         cursor={false}
                         content={<CustomTooltip/>}/>
                <Line
                    dot={false}
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="url(#colorLine)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="none"
                    layout={"vertical"}>
                </Line>
            </LineChart>
        </Sessions>
    )
}

SessionDuration.propTypes = {
    day: PropTypes.number,
    sessionLength: PropTypes.number
}

export default SessionDuration
