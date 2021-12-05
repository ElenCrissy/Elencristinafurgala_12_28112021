import {useEffect} from "react";

function GetUsers () {
    let userId
    useEffect( () => {
        const url = `http://localhost:3000/user/${userId}`
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [])
}

export default GetUsers