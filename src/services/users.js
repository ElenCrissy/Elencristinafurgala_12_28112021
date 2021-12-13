import {useEffect, useState} from "react";

const useUserFirstName = () => {
    const [userFirstName, setUserFirstName] = useState(null)

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18`

        const resp = await fetch(url)
        const data = await resp.json()
        const userData = data.data.userInfos
        setUserFirstName(userData.firstName)

    }, [])

    return userFirstName
}

export default useUserFirstName