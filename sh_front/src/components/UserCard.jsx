import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';


const UserCard = ({user, showLink = true}) => {
    
    return (
    <div className="use-card">
        <img src={user.avatar_url}   alt={user.login} />
        <h2>{user.login}</h2>
        <p>

        </p>
        {showLink && <Link to={`/details?username=${user.login}`}>Details</Link>}

    </div>

    );
};

export default UserCard;