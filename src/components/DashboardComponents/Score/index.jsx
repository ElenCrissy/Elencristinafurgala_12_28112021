import styled from "styled-components";
import PropTypes from "prop-types";

import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer
} from "recharts";

const ScoreContainer = styled.div`
  //width: 32%;
  height: 230px;
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

const Thing = styled.div`
  position: absolute;
  width: 135px;
  height: 135px;
  top: 50%;
  left: 50%;
  color: black;
  background-color: white;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
`


const Score = ({ data }) => {
    const dataArray = [
        {
            scoreNumber : 1,
            fill : 'blue'
        },
        {
            scoreNumber : data,
            fill : 'red'
        }
    ]
    const goalPercentage = data*100
    console.log(goalPercentage)

    return(

            <ScoreContainer>
                <p>Score</p>
                <ResponsiveContainer width={230} height={230}>
                    <RadialBarChart
                        width={230}
                        height={230}
                        innerRadius="10%"
                        outerRadius="130%"
                        data={dataArray}
                        startAngle={210}
                        endAngle={-210}
                        style={{background:"#FBFBFB", borderRadius: "5px", stroke: 'white', strokeWidth: 2}}
                        barSize={10}
                        barGap={{background:"white"}}
                    >
                        <RadialBar
                            minAngle={0}
                            clockWise={true}
                            dataKey='scoreNumber'
                            cornerRadius="5"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Thing><p>{goalPercentage}% de votre objectif</p></Thing>
            </ScoreContainer>

    )
}

Score.propTypes = {
    data: PropTypes.number.isRequired
}

export default Score;

