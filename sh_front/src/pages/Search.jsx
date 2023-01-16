import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../components/UserCard";

import './UsersGrid.css';


const userURL = import.meta.env.VITE_API_SEARCH;

const Search = () => {
    
    const [searchUsers, setSearchUsers] = useState({});
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const urlSearch = userURL + query;
    

    console.log(urlSearch);

    const getAnyRatedUsers = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setSearchUsers(data.items);
    }

    useEffect(() => {


        getAnyRatedUsers(urlSearch);


    }, []);


    return (

        <div className="container">
            <h2 className="title">
                Results for: <span className="query-text">{query}</span>
            </h2>
            <div className="users-container">
                {searchUsers.length < 1 && <p>Loading...</p>}
                {searchUsers.length > 0 && searchUsers.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default Search;