import {useEffect, useState} from "react";

const useUserFirstName = (userId) => {
    const [userFirstName, setUserFirstName] = useState(null)

    useEffect(  async () => {
        const url = `http://localhost:3000/user/${userId}`

        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)
        const userData = data.data.userInfos
        setUserFirstName(userData.firstName)

    }, [])

    return userFirstName
}

export default useUserFirstName