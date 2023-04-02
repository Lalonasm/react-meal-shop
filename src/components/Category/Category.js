import React from 'react';
import './Category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Category = ({ handleAddToCart, category }) => {
    // console.log(props.category);
    // const { handleAddToCart, category } = props;
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;
    return (
        <div className='category'>
            <img src={strCategoryThumb} alt="" ></img>
            <div >
                <p className='category-name'> {strCategory} </p>
                <p className='category-description'>Description : {strCategoryDescription}</p>
            </div>

            <button onClick={() => handleAddToCart(category)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Category;