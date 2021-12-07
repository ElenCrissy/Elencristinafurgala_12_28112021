import {useEffect, useState} from "react";

const useUserFirstName = () => {
    const [userFirstName, setUserFirstName] = useState(null)

    useEffect(  async () => {
        const url = `http://localhost:3000/user/18`

        const resp = await fetch(url)
        const data = await resp.json()
        const userTest = data.data.userInfos
        setUserFirstName(userTest.firstName)

    }, [])

    return userFirstName
}

export default useUserFirstName