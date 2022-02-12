import {useEffect, useState} from "react";

/**
 * Returns data about session duration line chart
 * @param { Number } userId
 * @return { Object.<{userId: Number, session: Array}> } sessions
 */

const useSessions = (userId) => {
    const [sessions, setSessions] = useState({
        userId : userId,
        sessions: []
    })

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
        fetchData().catch(err => console.log(err))

    }, [userId])

    return sessions
}

export default useSessions