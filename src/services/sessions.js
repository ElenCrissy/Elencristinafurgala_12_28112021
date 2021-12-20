import {useEffect, useState} from "react";

const useSessions = (userId) => {
    const [sessions, setSessions] = useState([])

    useEffect(  async () => {
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

    }, [])


    return sessions
}

export default useSessions