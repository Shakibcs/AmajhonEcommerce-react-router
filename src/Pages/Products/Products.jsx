import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {

    // const {products} = useLoaderData()
    // console.log(products);

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=>setProducts(data.products))
    },[])

    console.log(products)

    return (
        <div>
            <div>Products page</div>
        </div>
    );
};

export default Products;