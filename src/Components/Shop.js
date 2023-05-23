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

const Shop = () => {
    return (
        <div className="Shop">
             <h1>Shop</h1>
             <div className="item-grid">
                <div className="item">
                    <img src={itemOneImage} alt="Fur hood jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemTwoImage} alt="Hooded parka" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemThreeImage} alt="Konbeca jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemFourImage} alt="NameIt jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemFiveImage} alt="NorthFace winter jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemSixImage} alt="Quilted winter coat" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemSevenImage} alt="Thermal jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemEightImage} alt="WantDo puffer jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemNineImage} alt="Windproof fleece jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
                <div className="item">
                    <img src={itemTenImage} alt="Winter rain jacket" />
                    <h3>Item description</h3>
                    <p>price</p>
                    <button type="button">Add To Cart</button>
                </div>
             </div>
        </div>
    );
}

export default Shop;