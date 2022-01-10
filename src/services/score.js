import {useEffect, useState} from "react";

/**
 * Returns data about score radial bar chart
 * @param { Number } userId
 * @return { Object.<{id: Number, userInfos: Object, score: Number, keyData: Object}> } score
 */

const useScore = (userId) => {
    const [score, setScore] = useState({
        score : 0
    })

    useEffect(  () => {
        async function fetchData(){
            const url = `http://localhost:3000/user/${userId}`
            const resp = await fetch(url)
            const data = await resp.json()
            const userData = data.data
            setScore(userData)
        }
        fetchData()


    }, [userId])

    return score
}

export default useScore