import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../components/UserCard";

import "./UsersGrid.css";


const Search = () => {
    const [searchParams] = useSearchParams();

    const userURL = import.meta.env.VITE_API;

    const [anyUsers, setAnyUsers] = useState({});
    const query = searchParams.get("q");

    const getAnyRatedUsers = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
        // const searchRes = data.map((user) => 
        //     {
        //         if(user.login.inclides(query)){
        //             return user
        //         }
        //     }
        
        // );
        // console.log(searchRes)


        setAnyUsers(data)
    }

    useEffect(() => {


        getAnyRatedUsers(userURL);


    }, [])


    return (

        <div className="container">
            <h2 className="title">
                Results for: <span className="query-text">{query}</span>
            </h2>
            <div className="users-container">
                {anyUsers.length < 1 && <p>Loading...</p>}
                {anyUsers.length > 0 && anyUsers.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default Search;