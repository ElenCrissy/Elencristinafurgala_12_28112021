import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    Bar
} from "recharts";



const DailyActivities = (props) => {
    const data = props.data
    const dataIndex = Array.from(data.keys())

    return(
        <ResponsiveContainer
            width="100%"
            height={250}
            height={400}>
            <BarChart width={730} height={250} data={data}
                      padding={20}
                      fill="#FBFBFB"
                      radius={25}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis data={dataIndex} />
                <YAxis dataKey="kilogram" orientation="right"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Poids" fill="#282D30" radius={5} />
                <Bar dataKey="Calories brûlées" fill="#E60000" radius={5} />
            </BarChart>


        </ResponsiveContainer>
    )
}

export default DailyActivities