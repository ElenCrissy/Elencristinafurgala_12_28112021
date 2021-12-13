import {useEffect, useState} from "react";

const useActivity = () => {
    const [activity, setActivity] = useState([])

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18/activity`
        const resp = await fetch(url)
        const data = await resp.json()
        const perfTest = data.data.sessions
        setActivity(perfTest)

    }, [])

    return activity
}

export default useActivity