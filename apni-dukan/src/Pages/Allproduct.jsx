import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  GridItem,
  Image,
  Badge,
  Text,

} from "@chakra-ui/react";

import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
async function fetchData() {
  const api = "https://dummyjson.com/products?limit=100";
  const url = api;

  try {
    const response = await axios.get(url);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error here, e.g., display an error message or redirect to another page
    // You can use conditional rendering to display an error message based on the error state
  }
}

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
 
  const fetchDataForElectronics = async () => {
    try {
      const phoneData = await fetchData();

      setData(phoneData);
    } catch (error) {
      setError(error); // Store the error for handling
    }
  };

  useEffect(() => {
    fetchDataForElectronics();
  }, []);

  const colorScheme = {
    // Customize colors based on your preferences, here's an example
    primary: "teal",
    secondary: "gray.500",
    accent: "orange.400",
  };

  return (
    <>
      <Box>
    

        <Navbar />
        
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gridGap="20px"
          p={4}
        >
          {error ? (
            <Box bg="red.100" borderRadius="lg" p={4} textAlign="center">
              <Text color="red.500" fontSize="lg" fontWeight="bold">
                An error occurred while fetching data. Please try again later.
              </Text>
            </Box>
          ) : data.length > 0 ? (
            data.map((product) => (
              <GridItem key={product.id}>
                <Box borderRadius="30%" boxShadow="dark-lg">
                  <Image
                    src={product.thumbnail}
                    alt={product.brand}
                    h="200"
                    w="200px"
                  />
                  <Flex direction="column" justify="space-between" p={4}>
                    <Box>
                      <Text fontSize="xl" fontWeight="bold">
                        {product.title}
                      </Text>
                      <Badge colorScheme={colorScheme.primary} mr={2}>
                        {product.category}
                      </Badge>
                      <Text color={colorScheme.secondary}>
                        Brand: {product.brand}
                      </Text>
                    </Box>
                    <Text
                      color={colorScheme.accent}
                      fontSize="lg"
                      fontWeight="bold"
                    >
                      &#8377; {product.price}
                    </Text>
                  </Flex>
                </Box>
              </GridItem>
            ))
          ) : (
            <Text textAlign="center" fontSize="lg" fontWeight="bold">
              Loading products...
            </Text>
          )}
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default AllProduct;
