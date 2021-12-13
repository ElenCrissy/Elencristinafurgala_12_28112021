import {useEffect, useState} from "react";

const useSessions = () => {
    const [sessions, setSessions] = useState([])

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18/average-sessions`
        const resp = await fetch(url)
        const data = await resp.json()
        const sessionsData = data.data
        setSessions(sessionsData)

    }, [])

    return sessions
}

export default useSessions