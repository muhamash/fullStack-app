import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () =>
{   
    const Navigate = useNavigate();
    const HandleClick = () =>
    {
        Navigate( '/' );
    }

    return (
        <div className='flex'>
            <div className='cursor-pointer' onClick={HandleClick}>Logo</div>
            <div> 
                <Link to={'/cart'}>Cart</Link>
                <Link to={'/shop'} >Shop</Link>
            </div>
            <div>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export default Nav;