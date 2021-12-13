import styled from "styled-components";
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend
} from "recharts";

const RadarGraph = (props) => {
    const data = props.data
    const kinds = data.kind
    const perfValues = data.data

    if(perfValues !== undefined) {
        perfValues.map(perfValue => {
            for (let i in kinds) {
                if(i == perfValue.kind){
                    perfValue.kind = kinds[i]
                }
            }
            return perfValues
        })
    }

    return (
        <RadarChart
            outerRadius={90}
            width={250}
            height={250}
            data={perfValues}
            style={{background: "#282D30"}}
            radius={5}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" style={{color: "white"}}/>
            <PolarRadiusAxis dataKey="value" angle={30}/>
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            <Legend />
        </RadarChart>
    )
}

export default RadarGraph