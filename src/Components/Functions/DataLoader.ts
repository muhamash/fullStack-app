interface Products {
  [key: string]: any;
}

const DataLoader = async (): Promise<Products[]> =>
{
    try
    {
        const fetchData = await fetch( 'https://fakestoreapi.com/products' );
        const products = await fetchData.json() as Products[];
        if ( !fetchData.ok )
        {
            throw new Error( `HTTP error! Status: ${ fetchData.status }` );
        }
        console.log( products );
        return products;
    } catch ( error )
    {
        console.error( 'Error fetching data:', error );
        return [];
    }
};

export default DataLoader;