import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles/Home.css'
import firstImage from '../Images/CarouselImages/carousel-image-1.jpg';
import secondImage from '../Images/CarouselImages/carousel-image-2.jpg';
import thirdImage from '../Images/CarouselImages/carousel-image-3.jpg';
import fourthImage from '../Images/CarouselImages/carousel-image-4.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <div className="about">
                <h2>About Us</h2>
                <p>
                    We are a small winter clothing distributor based in Colorado. Our winter apparel is fashionable, durable,
                    and will keep you warm all winter long. Whether you're looking for ski/snowboard gear, or general purpose
                    outdoor wear, were certain we've got something you will love. 
                </p>
                <Link to="/shop"><button className="shop-button" type="button">Shop Now</button></Link>
            </div>
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true} showArrows={false} showThumbs={false}>
                <div id="slide-one">
                    <img src={firstImage} alt="" className="carousel-image" />
                    <p className="image-credit"><a href="https://www.freepik.com/free-photo/fashionable-woman-great-mood-posing-wooden-wall_12858216.htm#query=winter%20jackets&position=1&from_view=search&track=ais">Image by lookstudio</a> on Freepik</p>
                </div>
                <div id="slide-two">
                    <img src={secondImage} alt="" className="carousel-image" />
                    <p className="image-credit"><a href="https://www.freepik.com/free-photo/portrait-bearded-indian-male-dressed-winter-jacket-grey-background_26399842.htm#query=winter%20jackets&position=42&from_view=search&track=ais#position=42&query=winter%20jackets">Image by fxquadro</a> on Freepik</p>
                </div>
                <div id="slide-three">
                    <img src={thirdImage} alt="" className="carousel-image" />
                    <p className="image-credit"><a href="https://www.freepik.com/free-photo/portrait-bearded-male-dressed-warm-jacket-scarf-hold-backpack-isolated-grey-background_26472358.htm#query=winter%20jackets&position=15&from_view=search&track=ais">Image by fxquadro</a> on Freepik</p>
                </div>
                <div id="slide-four">
                    <img src={fourthImage} alt="" className="carousel-image" />
                    <p className="image-credit"><a href="https://www.freepik.com/free-photo/romantic-european-girl-pink-coat-smiling-cold-day-cheerful-fair-haired-woman-having-fun-during-winter-photoshoot_11208403.htm#query=winter%20jackets&position=40&from_view=search&track=ais">Image by lookstudio</a> on Freepik</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Home;