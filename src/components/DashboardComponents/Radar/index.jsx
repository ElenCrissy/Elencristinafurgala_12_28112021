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
    console.log(kinds)

    if(perfValues !== undefined) {
        perfValues.map(perfValue => {
            for (let i in kinds) {
                if(i == perfValue.kind){
                    console.log(kinds[i])
                    perfValue.kind = kinds[i]
                    return kinds[i]
                }
            }
        })
    }

    return (
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={kinds} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    )
}

export default RadarGraph