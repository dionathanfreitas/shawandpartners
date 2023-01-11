import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'


import "./Navbar.css"

const Navbar = () => {
    const [search, setSearch] = useState("");
    
    const navigte = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(search);
        
        if(!search) return;
        
        navigte(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <h2>
                <AiFillGithub /><Link to="/">User Lib</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Find any user github...' 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    />
                <button type='submit'>
                    <BiSearchAlt />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;