import {useEffect, useState} from "react";

const GetUsers = () => {
    const [users, setUsers] = useState("")
    useEffect( () => {
        const url = `http://localhost:3000/user/`
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        const fetchData = () => {
            try {
                const response = fetch(url);
                // const json = response.json();
                console.log(response.json());
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [])

    return <div>{users}</div>
}

export default GetUsers