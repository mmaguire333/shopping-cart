import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <h1>Online Store</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/cart">
                        <li>Cart ({props.itemCount})</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;