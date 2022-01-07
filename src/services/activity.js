import {useEffect, useState} from "react";

/**
 * Returns data about daily activities bar chart
 * @param { Number } userId
 * @return { Array.<{calories: Number, day: String, kilogram: Number}> } activity
 */

const useActivity = (userId) => {
    const [activity, setActivity] = useState([])

    useEffect( () => {
        async function fetchData() {
            const url = `http://localhost:3000/user/${userId}/activity`
            const resp = await fetch(url)
            const data = await resp.json()
            const perfTest = data.data.sessions
            setActivity(perfTest)
        }
        fetchData()

    }, [])

    return activity
}

export default useActivity