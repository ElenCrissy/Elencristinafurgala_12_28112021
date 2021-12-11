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
    console.log(data)

    return(
        <ResponsiveContainer
            width="100%"
            height={250}
            height={400}>
            <BarChart width={730} height={250} data={data}
                      padding={20}
                      fill="#FBFBFB"
                      radius={[25, 25, 0, 0]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis data={dataIndex} />
                <YAxis dataKey="kilogram" orientation="right"/>
                <Tooltip cursor={{fill: "rgba(196, 196, 196, 0.5)"}}/>
                <Legend verticalAlign="top" height={36}/>
                <Bar dataKey="kilogram" fill="#282D30" radius={5} width={7}/>
                <Bar dataKey="calories" fill="#E60000" radius={5} width={7}/>
            </BarChart>


        </ResponsiveContainer>
    )
}

export default DailyActivities