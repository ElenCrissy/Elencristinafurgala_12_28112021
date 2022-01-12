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
    let perfValues
    if(data === undefined) {
        perfValues = []
    }
    if(data !== undefined) {
        const newData = {
            ...data,
            newKinds : {
                1 : "Cardio",
                2 : "Energie",
                3 : "Endurance",
                4 : "Force",
                5 : "Vitesse",
                6 : "Intensité"
            }
        }
        const valuesAndKind = newData.data
        perfValues = valuesAndKind.map(element => {
            for(let i in newData.newKinds) {
                if(element.kind.toString() === i) {
                    element.kind = newData.newKinds[i]
                }
            }
            return element
        })
        console.log(perfValues)
        return perfValues
    }


    return (
        <ResponsiveContainer width="31%" height={230} >
            <RadarChart
                outerRadius={48}
                // width={200}
                // height={200}
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