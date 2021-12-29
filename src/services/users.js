import {useEffect, useState} from "react";

/**
 * Returns data about daily activities bar chart
 * @param { Number } userId
 * @return { String }> } userFirstName
 */

const useUserFirstName = (userId) => {
    const [userFirstName, setUserFirstName] = useState(null)

    // Similar to componentDidMount and componentDidUpdate
    useEffect(  async () => {
        const url = `http://localhost:3000/user/${userId}`

        const resp = await fetch(url)
        const data = await resp.json()
        const userData = data.data.userInfos
        setUserFirstName(userData.firstName)

    }, [])

    return userFirstName
}

export default useUserFirstName