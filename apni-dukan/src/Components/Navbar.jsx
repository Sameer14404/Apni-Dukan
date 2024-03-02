import { Stack, Image, Box, Heading, Input, Center } from "@chakra-ui/react";
import logo from "../assets/Apni-dukan-logo.png";

import Carousel from "./ImageCrousel";
import ProductCarousel from "./ProductCrousel";
import Footer from "./Footer";
import Groceries from "./Groceries";
import SkinCare from "./Skin";




function Navbar() {
  return (
    <>
      <Box w="90%" p={20} gap="50px" display={"flex"} justifyContent="space-between"  height={50} paddingBottom="100px">
        <Stack direction="row" spacing="30px" justifyContent="space-between">
          <Box>
            <Image borderRadius="50%" src={logo} alt="logo" size="sm" boxSize="90px" />
          </Box>

 
          <Center >
          <Box  height="20px">
            <Input   variant="flushed"
                placeholder="Search"
                size="lg" 
                width="300px" 
                height="30px"
              
                />
            </Box>
          </Center>
       </Stack>
          
<Stack direction="row"  spacing="24px" justifyContent="space-between" width="600px" >
          <Box>
            <Heading as="h4" size="md">
              Home
            </Heading>
          </Box>

          <Box>
            <Heading as="h4" size="md">
              Contact
            </Heading>
          </Box>

          <Box>
            <Heading as="h4" size="md">
              Login
            </Heading>
          </Box>

          <Box>
            <Heading as="h4" size="md">
              Cart
            </Heading>
          </Box>
        </Stack>
      </Box>
    
    
    <Carousel/>
    <Groceries/>
 <ProductCarousel/>
<SkinCare/>
<Footer/>
    </>
  );
}

export default Navbar;
