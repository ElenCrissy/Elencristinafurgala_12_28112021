import styled from "styled-components";

import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    LabelList
} from "recharts";

const RadarGraph = (props) => {
    const data = props.data
    const kinds = data.kind
    const perfValues = data.data

    if(perfValues !== undefined) {
        perfValues.map(perfValue => {
            for (let i in kinds) {
                const upperCasedKind = kinds[i][0].toUpperCase() + kinds[i].slice(1);
                if(i == perfValue.kind){
                    perfValue.kind = upperCasedKind
                }
            }
            return perfValues
        })
    }

    return (
        <RadarChart
            outerRadius={90}
            width={200}
            height={200}
            data={perfValues}
            style={{background: "#282D30", borderRadius:"5px", fill:"#FFF"}}
        >
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="kind"/>
            <PolarRadiusAxis dataKey="value" angle={"none"}/>
            <Radar dataKey="value" legendType={"none"} fill="#FF0101" fillOpacity={0.7}/>
            <Legend/>
        </RadarChart>
    )
}

export default RadarGraph