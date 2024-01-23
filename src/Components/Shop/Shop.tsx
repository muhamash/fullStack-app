import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

interface Product {
    [ key: string ]: string;
}

const Loading = () => (
  <div className='text-lg font-mono text-red-600'>Loading...</div>
);

const Shop = () =>
{
    const initialProducts: any = useLoaderData();
    const [ loading, setLoading ] = useState( true );

    const fetchData = async () =>
    {
        try
        {
            await new Promise( resolve => setTimeout( resolve, 1000 ) );
            setLoading( false );
        }
        catch ( error )
        {
            console.error( 'Error fetching products:', error );
            setLoading( false );
        }
    };

    useEffect( () =>
    {
        fetchData();
    }, [] );

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    Shop: {initialProducts.length}
                    <div>
                        {initialProducts.map( ( product: Product, index: number ) => (
                            <div key={index}>
                                <img className='w-[200px] h-[200px]' src={product.image} alt="" />
                                <p>{product.price}TK</p>
                            </div>
                        ) )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;