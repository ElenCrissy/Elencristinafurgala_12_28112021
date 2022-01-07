import {useEffect, useState} from "react";

/**
 * Returns data about daily activities bar chart
 * @param { Number } userId
 * @return { Object.<{userId: Number, kind: Object, data: Array}> } perf
 */

const usePerf = (userId) => {
    const [perf, setPerf] = useState([])

    useEffect(  () => {
        async function fetchData() {
            const url = `http://localhost:3000/user/${userId}/performance`
            const resp = await fetch(url)
            const data = await resp.json()
            const perfData = data.data
            setPerf(perfData)
        }
        fetchData()

    }, [])
    return perf
}

export default usePerf