import React from 'react';
import { Link } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <AiFillGithub />
                <Link to="/">User Lib</Link>
            </h2>
            <form>
                <input type="text" placeholder='Find any user github...' />
                <button type='submit'>
                    <BiSearchAlt />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;