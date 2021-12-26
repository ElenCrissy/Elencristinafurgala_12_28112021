import styled from "styled-components";
import PropTypes from "prop-types";

import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
} from "recharts";

const ScoreContainer = styled.div`
  width: 33%;
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

const Score = ({ data }) => {
    let dataArray = [{
        data,
        max : 1
    }]

    return(
        <ScoreContainer>
            <p>Score</p>
            <RadialBarChart
                width={235}
                height={235}
                innerRadius="10%"
                outerRadius="80%"
                data={dataArray}
                startAngle={180}
                endAngle={0}
                style={{background:"#FBFBFB", borderRadius:"5px"}}
            >
                <RadialBar minAngle={15}
                           label={{ fill: 'black', position: 'insideStart' }}
                           style={{backgroundColor:"blue"}}
                           clockWise={true}
                           dataKey='data' />
                {/*<Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />*/}
                <Tooltip />
            </RadialBarChart>
        </ScoreContainer>
    )
}

Score.propTypes = {
    data: PropTypes.number,
}

export default Score;

