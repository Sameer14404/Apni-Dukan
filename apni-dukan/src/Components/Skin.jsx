

import { useEffect,useRef } from "react";
import {Box,Image,Center} from "@chakra-ui/react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Heading } from '@chakra-ui/react'
const skincareImg=[
    "https://m.media-amazon.com/images/I/615CsjLabfL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/51iIiB6pEQL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/31ZSxOywG8L._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/51wVc+BjoHL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61KQgDuNSSL._AC_UL960_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71t9JRry+3L._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71A44EUHdXL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81DwcFPUp9L._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71xx53cOPSL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61rKnQImLSL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/51632A5-D4L._AC_UL480_FMwebp_QL65_.jpg",
]

function SkinCare() {

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
      Skin-Care
      </Heading>
      </Center>
        
      <Box height="md"  boxShadow="lg" borderRadius="md" pb="20px">

<Slider {...settings}>
      {skincareImg.map((el, index) => (
        <Box key={index} width="100px" mx="auto"> {/* Adjust the width based on your design */}
          <Image src={el} width="sm" />
        </Box>
      ))}
    </Slider>
      </Box>
      
      </>
  
  
  );
}


export default SkinCare;