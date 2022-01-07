import {useEffect, useState} from "react";
import {func} from "prop-types";

/**
 * Returns data about session duration line chart
 * @param { Number } userId
 * @return { Object.<{userId: Number, session: Array}> } sessions
 */

const useSessions = (userId) => {
    const [sessions, setSessions] = useState([])

    useEffect(   () => {
        async function fetchData(){
            const url = `http://localhost:3000/user/${userId}/average-sessions`
            const resp = await fetch(url)
            const data = await resp.json()
            const sessionsData = data.data
            const newData = {
                day: 8,
                sessionLength: 40
            }
            const sessionsDuration = sessionsData.sessions
            sessionsDuration.push(newData)
            setSessions(sessionsData)
        }
        fetchData()

    }, [])

    return sessions
}

export default useSessions