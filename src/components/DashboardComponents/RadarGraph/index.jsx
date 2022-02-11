import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from "recharts";
import PropTypes from "prop-types";


const RadarGraph = ({ data }) => {
    console.log(data)
    let perfValues = []
    if(data !== undefined) {
        const newKinds = {
            1 : "Cardio",
            2 : "Energie",
            3 : "Endurance",
            4 : "Force",
            5 : "Vitesse",
            6 : "Intensité"
        }
        perfValues = data.data.map(element => {
            return {
                value : element.value,
                kind : newKinds[element.kind]
            }
        })
    }

    return (
        <ResponsiveContainer width="31%" height={230} >
            <RadarChart
                outerRadius={48}
                data={perfValues}
                style={{background: "#282D30", borderRadius:"5px", fill:"#FFF"}}
            >
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" style={{fontSize: "12px"}}/>
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
            kind : PropTypes.number.isRequired
        })),
        kind: PropTypes.objectOf(PropTypes.string.isRequired),
        userId: PropTypes.number.isRequired
    })
}

export default RadarGraph