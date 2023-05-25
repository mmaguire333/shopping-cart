import Item from './Item';
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
import '../Styles/Shop.css';
import { Link } from 'react-router-dom';

const Shop = (props) => {
    return (
        <div className="Shop">
            <h1>Shop</h1>
            <div className="item-grid">
                <Item src={itemOneImage} alt="Fur Hood Jacket" name="Fur Hood Jacket" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemTwoImage} alt="Hooded Parka" name="Hooded Parka" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemThreeImage} alt="Gray Hooded Jacket" name="Gray Hooded Jacket" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemFourImage} alt="Fur Winter Jacket" name="Fur Winter Jacket" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemFiveImage} alt="Red Puffer Jacket" name="Red Puffer Jacket" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemSixImage} alt="Quilted Winter Coat" name="Quilted Winter Coat" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemSevenImage} alt="Thermal Jacket" name="Thermal Jacket" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemEightImage} alt=" Hooded Puffer Jacket" name="Hooded Puffer Jacket" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemNineImage} alt="Windproof Fleece" name="Windproof Fleece" price={47.99} addToCart={props.addToCart}></Item>
                <Item src={itemTenImage} alt="Winter Rain Jacket" name="Winter Rain Jacket" price={47.99} addToCart={props.addToCart}></Item>
            </div>
            <Link to="/cart">
                <button type="button" className="cart-button">Cart ({props.itemCount})</button>
            </Link>
        </div>
    );
}

export default Shop;