import {useEffect, useState} from "react";

/**
 * Returns data about kpi
 * @param { Number } userId
 * @return { Object.<{calorieCount : Number, proteinCount : Number, carbohydrateCount : Number, LipidCount : Number}> } kpi
 */

const useKpi = (userId) => {
    const [kpi, setKpi] = useState([])

    useEffect(  () => {
        async function fetchData(){
            const url = `http://localhost:3000/user/${userId}`
            const resp = await fetch(url)
            const data = await resp.json()
            const kpiTest = data.data.keyData
            setKpi(kpiTest)
        }
        fetchData()

    }, [userId])

    return kpi
}

export default useKpi