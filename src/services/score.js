import {useEffect, useState} from "react";

const useScore = (userId) => {
    const [score, setScore] = useState(null)

    useEffect(  async () => {
        const url = `http://localhost:3000/user/${userId}`

        const resp = await fetch(url)
        const data = await resp.json()
        const userData = data.data
        setScore(userData)

    }, [])

    return score
}

export default useScore