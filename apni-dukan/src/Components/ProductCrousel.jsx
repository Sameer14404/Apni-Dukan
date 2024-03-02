
import { useEffect,useRef } from "react";
import {Box,Image,Center} from "@chakra-ui/react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Heading } from '@chakra-ui/react'
const images=[
    "https://m.media-amazon.com/images/I/51VxQ9Cf-mL._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/51h7CQTRJ1L._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/51-qSLiwrhL._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/61la7rfN9eL._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/71iQzs5O4NL._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/616gUvx+8NL._AC_SY400_.jpg",
   "https://m.media-amazon.com/images/I/61Hwqy2UBCL._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/81UScz47obL._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/711jtvyLkKL._AC_SY400_.jpg",
    "https://m.media-amazon.com/images/I/51IddzGCTtL._AC_SY400_.jpg",
     "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_SY400_.jpg",

]





function ProductCarousel() {

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
        <Center>
        <Heading as='h1' fontSize="2xl" fontWeight="bold" mb="8">
        Electronics
        </Heading>
        </Center>
          
        <Box height="md"  boxShadow="lg" borderRadius="md" pb="20px">

  <Slider {...settings}>
        {images.map((el, index) => (
          <Box key={index} width="100px" mx="auto"> {/* Adjust the width based on your design */}
            <Image src={el} width="sm" />
          </Box>
        ))}
      </Slider>
        </Box>
        
        </>
    
    
    );
  }
  

export default ProductCarousel;