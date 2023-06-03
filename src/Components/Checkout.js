import { Link } from "react-router-dom";
import '../Styles/Checkout.css';

const Checkout = () => {
    return (
        <div className="Checkout">
            <h1>Thank You For Shopping With Us!</h1>
            <Link to="/"><button className="continue-button" type="button">Continue Shopping</button></Link>
        </div>
    )
}

export default Checkout;