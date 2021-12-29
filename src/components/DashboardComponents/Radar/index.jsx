import styled from "styled-components";

import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Label
} from "recharts";
import PropTypes from "prop-types";

/**
 * Returns DOM element of the RadarGraph bar chart
 * @param { Object } data
 * @param { Number } data.userId
 * @param { Object } data.kind
 * @param { Array.<Object> } data.data
 * @return { JSX.Element }
 */

const RadarGraph = ({ data }) => {
    const kinds = data.kind
    const perfValues = data.data
    if(perfValues !== undefined) {
        perfValues.map(perfValue => {
            for (let i in kinds) {
                if(i == perfValue.kind){
                    perfValue.kind = kinds[i]
                    if(perfValue.kind === "strength"){
                        perfValue.kind = "Force"
                    }
                    if(perfValue.kind === "cardio"){
                        perfValue.kind = "Cardio"
                    }
                    if(perfValue.kind === "endurance"){
                        perfValue.kind = "Endurance"
                    }
                    if(perfValue.kind === "speed"){
                        perfValue.kind = "Vitesse"
                    }
                    if(perfValue.kind === "energy"){
                        perfValue.kind = "Energie"
                    }
                    if(perfValue.kind === "intensity"){
                        perfValue.kind = "Intensité"
                    }
                }
            }
            return perfValues
        })
    }

    return (
        <ResponsiveContainer width="30%" height={235}>
            <RadarChart
                outerRadius={60}
                width={235}
                height={235}
                data={perfValues}
                style={{background: "#282D30", borderRadius:"5px", fill:"#FFF"}}
            >
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" style={{fontSize: "12px", margin: "3px"}}/>
                <PolarRadiusAxis dataKey="value" angle={"none"} />
                <Radar dataKey="value" legendType={"none"} fill="#FF0101" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>
    )
}

RadarGraph.propTypes = {
    data: PropTypes.array,
    kind: PropTypes.object,
    userId: PropTypes.number
}

export default RadarGraph