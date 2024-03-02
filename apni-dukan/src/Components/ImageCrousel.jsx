

import { ChakraProvider } from '@chakra-ui/react';
import {Box,Image} from "@chakra-ui/react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner3 from "../assets/banner-2.png"
import banner2 from "../assets/banner-3.png"
import { useRef,useEffect } from 'react';
const Carousel = () => {

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000, 
    
  };

  return (
 
<Box>
<ChakraProvider >
 <Slider {...settings}>
 <Box boxShadow="lg" borderRadius="md" paddingBottom="20px">
          <Image src={banner2} alt="Slide 1" />
        </Box>
        <Box>
          <Image src={banner3} alt="Slide 2" />
        </Box>
        
      </Slider>
    
  

    </ChakraProvider>
</Box>
     
  );
};

export default Carousel;
