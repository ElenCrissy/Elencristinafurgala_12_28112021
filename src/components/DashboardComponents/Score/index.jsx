import styled from "styled-components";
import PropTypes from "prop-types";

import {
    RadialBarChart,
    RadialBar,
    Tooltip,
} from "recharts";

const ScoreContainer = styled.div`
  width: 35%;
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

/**
 * Returns DOM element of the Score radial bar chart
 * @param { Number } data
 * @return { JSX.Element }
 */

const Score = ({ data }) => {

    const dataArray = [
        {
            scoreNumber : 1,
            fill : 'white'
        },
        {
            scoreNumber : data,
            fill : 'red'
        }
    ]
    console.log(dataArray)

    return(
        <ScoreContainer>
            <p>Score</p>
            <RadialBarChart
                width={235}
                height={235}
                innerRadius="10%"
                outerRadius="80%"
                data={dataArray}
                startAngle={360}
                endAngle={0}
                style={{background:"#FBFBFB", borderRadius:"5px"}}
                barCategoryGap="0%"
                barSize={10}
            >
                <RadialBar minAngle={0}
                           clockWise={true}
                           dataKey='scoreNumber'
                           innerRadius={10}
                           outerRadius="20"
                           style={{borderRadius: "5px"}}
                />
                {/*<Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />*/}
                <Tooltip />
            </RadialBarChart>
        </ScoreContainer>
    )
}

Score.propTypes = {
    data: PropTypes.number
}

export default Score;

