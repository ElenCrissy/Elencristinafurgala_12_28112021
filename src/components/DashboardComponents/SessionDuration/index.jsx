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

const Sessions = styled.div`
  width: 200px;
  p{
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
                       width="100%"
                       tickLine={false}/>
                <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" />
                <Tooltip />
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

export default SessionDuration
