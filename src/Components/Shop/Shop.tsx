import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () =>
{
    const initialProducts = useLoaderData()
    console.log(typeof initialProducts)
    return (
        <div>
            Shop:{}
        </div>
    );
};

export default Shop;