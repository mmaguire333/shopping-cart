import { useState } from "react";
import '../Styles/Item.css';

const Item = (props) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        } 
    }

    const handleChange = (e) => {
        setQuantity(e.target.value)
    }

    const addToCartOnClick = () => {
        props.addToCart(props.name, props.price, quantity);
        setQuantity(1)
    }

    return (
        <div className="Item">
            <img src={props.src} alt={props.alt} className="item-image"/>
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <div className="quantity-input">
                <p>Quantity: </p>
                <button type="button" onClick={decrementQuantity}>-</button>
                <input type="number" value={quantity} onChange={handleChange}></input>
                <button type="button" onClick={incrementQuantity}>+</button>
            </div>
            <button type="button" onClick={addToCartOnClick}>Add To Cart</button>
        </div>
    )
}

export default Item;