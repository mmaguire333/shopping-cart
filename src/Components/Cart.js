import '../Styles/Cart.css';
import itemOneImage from '../Images/StoreImages/fur-hood-jacket.jpg';
import itemTwoImage from '../Images/StoreImages/hooded-parka.jpg';
import itemThreeImage from '../Images/StoreImages/konbeca-jacket.jpeg';
import itemFourImage from '../Images/StoreImages/name-it-winter-jacket.jpg';
import itemFiveImage from '../Images/StoreImages/north-face-winter-jacket.jpg';
import itemSixImage from '../Images/StoreImages/quilted-winter-coat.jpg';
import itemSevenImage from '../Images/StoreImages/thermal-jacket.jpg';
import itemEightImage from '../Images/StoreImages/wantdo-puffer-jacket.jpg';
import itemNineImage from '../Images/StoreImages/windproof-fleece.jpg';
import itemTenImage from '../Images/StoreImages/winter-rain-jacket.jpg';
import deleteIcon from '../Images/trash.png';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const handleRemove = (e) => {
        let name = e.target.previousElementSibling.firstChild.textContent;
        props.removeFromCart(name);
    }
    
    if(props.cartItems.length === 0) {
        return <h2>Cart Empty</h2>
    } else {
        return (
            <div className="Cart">
                <h2 className="title">Cart</h2>
                <ul className="cart-list">
                    {props.cartItems.map((item) => {
                        let imgSrc;

                        switch(item.name) {
                            case 'Fur Hood Jacket':
                                imgSrc = itemOneImage;
                                break;
                            case 'Hooded Parka':
                                imgSrc = itemTwoImage
                                break;
                            case 'Gray Hooded Jacket':
                                imgSrc = itemThreeImage
                                break;
                            case 'Fur Winter Jacket':
                                imgSrc = itemFourImage
                                break;
                            case 'Red Puffer Jacket':
                                imgSrc = itemFiveImage
                                break;
                            case 'Quilted Winter Coat':
                                imgSrc = itemSixImage
                                break;
                            case 'Thermal Jacket':
                                imgSrc = itemSevenImage
                                break;
                            case 'Hooded Puffer Jacket':
                                imgSrc = itemEightImage
                                break;
                            case 'Windproof Fleece':
                                imgSrc = itemNineImage
                                break;
                            case 'Winter Rain Jacket':
                                imgSrc = itemTenImage
                                break;
                            default:
                                imgSrc = ''; 
                        }

                        return <li className="cart-item" key={item.name.split(' ').join('')}>
                                    <div className="cart-image-container">
                                        <img src={imgSrc} alt="" className="cart-item-image" />
                                    </div>
                                    <div className="info-container">
                                        <h3 className="cart-item-name">{item.name}</h3>
                                        <p className="cart-item-price">Price: {item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <img className="delete-icon" src={deleteIcon} alt="Delete Item" onClick={handleRemove} />
                                </li>
                    })}
                </ul>
                <h3 className="total">Total: ${Math.floor(props.cartItems.map(item => item.price * item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0) * 100) / 100}</h3>
                <div className="cart-buttons">
                    <Link to="/shop"><button className="cart-button" type="button">Continue Shopping</button></Link>
                    <Link to="/checkout"><button className="cart-button" type="button" onClick={props.emptyCart}>Checkout</button></Link>
                </div>
            </div>
        );
    }
}

export default Cart;