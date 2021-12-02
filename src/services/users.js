import {useEffect} from "react";

function GetUsers () {
    useEffect( async () => {
        const response = await fetch('http://localhost:3000/user/${userId}')
        const data = await response.json()
        console.log(JSON.parse(data))
    }, [])
}

export default GetUsers