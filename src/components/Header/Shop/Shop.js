import React, { useEffect, useState } from 'react';
import Category from '../../Category/Category';
import './Shop.css'
import Cart from '../../Cart/Cart';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';


const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // console.log('category load first before fetch')
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => {
                setCategories(data.categories)
                // console.log('category loaded')
            })

    }, []);

    useEffect(() => {
        // console.log('local storage first line', categories)
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const strCategory in storedCart) {
            const addedCategory = categories.find(category => category.strCategory === strCategory);
            if (addedCategory) {
                const quantity = storedCart[strCategory];
                addedCategory.quantity = quantity;
                savedCart.push(addedCategory);
                console.log(addedCategory);

            }
            // console.log('local storage finished')
        }
        setCart(savedCart);
    }, [categories])
    const handleAddToCart = (category) => {
        // let newCart;
        // const exists = cart.find(category => category.idCategory === category.idCategory);
        // if (!exists) {
        //     category.quantity = 1;
        //     newCart = [...cart, category]
        // }
        // console.log(category);
        const newCart = [...cart, category]
        setCart(newCart);
        addToDb(category.strCategory);
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
                <Cart cart={cart}></Cart>

            </div>
        </div >
    );
};

export default Shop;