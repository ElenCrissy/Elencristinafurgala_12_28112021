import styled from "styled-components";
import {
    LineChart,
    XAxis,
    CartesianGrid,
    Tooltip,
    Line,
} from "recharts";
import PropTypes from "prop-types";

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
  width: 30%;
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

const getSessions = (sessions) => {
    if(sessions === undefined) return []
    const days = ["L", "M", "M", "J", "V", "S", "D", ""]
    return sessions.map(session => {
            return {
                ...session,
                dayInitial: days[session.day-1]
            }
        })
}

const SessionDuration = (props) => {
    const {data} = props
    const sessions = data.sessions

    return(
        <Sessions>
            <p>Durée moyenne des sessions</p>
            <LineChart width={235}
                       height={235}
                       data={getSessions(sessions)}
                       margin={{ top: 40, right: 0, left: 0, bottom: 5 }}
                       radius={5}
                       style={{background: "#FF0000", borderRadius:"5px"}}>
                <defs>
                    <linearGradient id="colorLine" >
                        <stop offset="0%" stopColor="white" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="white" stopOpacity={0.8}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="dayInitial"
                       tickLine={false}
                       axisLine={false}
                       tick={{stroke: 'white', fontSize: '7px'}}
                       style={{opacity : 0.7}}
                       interval="preserveStart"
                       dx={10}
                />
                <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" />
                <Tooltip
                         cursor={false}
                         content={<CustomTooltip/>}
                         wrapperStyle={{top: 20}}
                />
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
    data : PropTypes.shape({
        userId : PropTypes.number.isRequired,
        sessions : PropTypes.arrayOf(PropTypes.shape({
            day: PropTypes.number.isRequired,
            sessionLength: PropTypes.number.isRequired,
        }))
    })
}

export default SessionDuration
