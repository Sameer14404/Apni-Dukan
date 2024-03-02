
import { useEffect,useRef } from "react";
import {Box,Image,Center} from "@chakra-ui/react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Heading } from '@chakra-ui/react'
const groceriesImg=[
    "https://images-eu.ssl-images-amazon.com/images/I/61AdBfnafWL._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/61x1Zonlr1L._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/618iMTypIrL._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/51f6wVXNkUL._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/51NA2yoUiPL._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/71CeVuD+yIL._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/61uaSnzW1uL._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/51NJJNAATTL._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/618lHyWqdML._AC_UL320_SR320,320_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/716-dA4KXAL._AC_UL320_SR320,320_.jpg",
]

function Groceries() {

    const sliderRef = useRef(null);

    useEffect(() => {
      const slider = sliderRef.current;
      if (slider) {
        slider.slickPlay(); // Start the autoplay when the component mounts
      }
  
      return () => {
        if (slider) {
          slider.slickPause(); // Pause the autoplay when the component unmounts
        }
      };
    }, []);
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,        
        autoplaySpeed: 3000, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
        <>
       
          
        <Box height="md"  boxShadow="lg" borderRadius="md" pb="20px" mt="20px">
        <Center>
        <Heading as='h1' fontSize="2xl" fontWeight="bold" mb="8">
        Groceries
        </Heading>
        </Center>
  <Slider {...settings}>
        {groceriesImg.map((el, index) => (
          <Box key={index} width="100px" mx="auto"> {/* Adjust the width based on your design */}
            <Image src={el} width="sm" />
          </Box>
        ))}
      </Slider>
        </Box>
        
        </>
    
    
    );
  }
  

export default Groceries;