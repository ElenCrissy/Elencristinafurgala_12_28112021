import styled from "styled-components";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
} from "recharts";

const ScoreContainer = styled.div`
  width: 30%;
  position: relative;
  p{
    position: absolute;
    margin-left: 10px;
    z-index: 99;
    color: black;
    font-weight: bold;
    font-size: 16px;
  }
`

const Score = (props) => {
    return(
        <ScoreContainer>
            <p>Score</p>
            <RadialBarChart
                width={200}
                height={200}
                innerRadius="10%"
                outerRadius="80%"
                data={props.data}
                startAngle={180}
                endAngle={0}
                style={{background:"#FBFBFB", borderRadius:"5px"}}
            >
                <RadialBar minAngle={15} label={{ fill: 'black', position: 'insideStart' }} background clockWise={true} dataKey='score' />
                {/*<Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />*/}
                <Tooltip />
            </RadialBarChart>
        </ScoreContainer>
    )
}

export default Score;

