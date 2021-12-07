import {useEffect, useState} from "react";

const GetKpi = () => {
    const [kpi, setKpi] = useState([])

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18`
        const resp = await fetch(url)
        const data = await resp.json()
        const kpiTest = data.data.keyData
        setKpi(kpiTest)

    }, [])

    return kpi
}

export default GetKpi