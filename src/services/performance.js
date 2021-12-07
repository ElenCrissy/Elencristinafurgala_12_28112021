import {useEffect, useState} from "react";

const usePerf = () => {
    const [perf, setPerf] = useState([])

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18/activity`
        const resp = await fetch(url)
        const data = await resp.json()
        const perfTest = data.data.sessions
        setPerf(perfTest)

    }, [])

    return perf
}

export default usePerf