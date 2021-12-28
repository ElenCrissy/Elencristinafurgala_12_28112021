import styled from "styled-components";

import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    LabelList,
    Label
} from "recharts";

const RadarContainer = styled.div`
  width: 35%;
`

const RadarGraph = (props) => {
    const data = props.data
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
        <RadarContainer>
            <RadarChart
                outerRadius={60}
                width={235}
                height={235}
                data={perfValues}
                style={{background: "#282D30", borderRadius:"5px", fill:"#FFF"}}
            >
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" style={{fontSize: "12px"}}>
                    <LabelList tickMargin={5}></LabelList>
                </PolarAngleAxis>
                <PolarRadiusAxis dataKey="value" angle={"none"} />
                <Radar dataKey="value" legendType={"none"} fill="#FF0101" fillOpacity={0.7}/>
            </RadarChart>
        </RadarContainer>
    )
}

export default RadarGraph