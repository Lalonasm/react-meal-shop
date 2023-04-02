import React, { useEffect, useState } from 'react';
import Category from '../../Category/Category';
import './Shop.css'

const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCategories(data.categories))

    }, []);
    const handleAddToCart = (category) => {
        console.log(category);
        const newCart = [...cart, category];
        setCart(newCart);
    }
    // console.log(categories)
    return (
        <div className='shop-container'>
            <div className="category-container">

                {
                    categories.map(category => <Category
                        key={category.idCategory}
                        category={category}
                        handleAddToCart={handleAddToCart}
                    ></Category>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Meal : {cart.length}</p>

            </div>
        </div >
    );
};

export default Shop;