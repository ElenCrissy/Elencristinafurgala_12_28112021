import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";
import PropTypes from "prop-types";


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
        <ResponsiveContainer width="31%" height={230}>
            <RadarChart
                outerRadius={48}
                width={200}
                height={200}
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
    data : PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            value : PropTypes.number.isRequired,
            kind : PropTypes.string.isRequired
        })),
        kind: PropTypes.objectOf(PropTypes.string.isRequired),
        userId: PropTypes.number.isRequired
    })
}

export default RadarGraph