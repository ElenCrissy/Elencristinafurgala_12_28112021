import {useEffect, useState} from "react";

/**
 * Returns data about daily activities bar chart
 * @param { Number } userId
 * @return { Array.<{calories: Number, day: String, kilogram: Number}> } activity
 */

const useActivity = (userId) => {
    const [activity, setActivity] = useState([{
        calories: 0,
        day: '',
        kilogram: 0
    }])

    useEffect( () => {
        async function fetchData() {
            const url = `http://localhost:3000/user/${userId}/activity`
            const resp = await fetch(url)
            const data = await resp.json()
            const perfTest = data.data.sessions
            setActivity(perfTest)
        }
        fetchData().catch(err => console.log(err))

    }, [userId])

    return activity
}

export default useActivity