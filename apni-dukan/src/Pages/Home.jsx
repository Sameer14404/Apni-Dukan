import Footer from "../Components/Footer"
import Groceries from "../Components/Groceries"
import Carousel from "../Components/ImageCrousel"
import Navbar from "../Components/Navbar"
import ProductCarousel from "../Components/ProductCrousel"
import SkinCare from "../Components/Skin"

export default function  Home(){
    return<>
    <Navbar/>
    <Carousel/>
    <Groceries/>
 <ProductCarousel/>
<SkinCare/>
<Footer/>
    </>
}