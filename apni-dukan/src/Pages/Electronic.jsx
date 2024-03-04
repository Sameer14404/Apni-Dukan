import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Badge,
  Text,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";

async function fetchData(key) {
  const api = "https://dummyjson.com/products/category/";
  const url = `${api}${key}`;

  try {
    const response = await axios.get(url);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for handling
  }
}

export default function Electronic() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataForElectronics = async () => {
      try {
        const phoneData = await fetchData("smartphones");
        const laptopData = await fetchData("laptops");
        const combinedData = [...phoneData, ...laptopData];
        setData(combinedData);
      } catch (error) {
        // Handle errors here, e.g., display an error message or retry logic
        console.error("Error fetching data:", error);
        // You can also implement retry logic or display an error message to the user
      }
    };

    fetchDataForElectronics();
  }, []);

  return (
    <Grid
      templateColumns={`repeat(${useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 })}, 1fr)`}
      gap={6}
    >
      {data.length > 0 ? (
        data.map((product) => (
          <GridItem key={product.id} p={4}>
            <Box
              as="card"
              borderRadius="md"
              boxShadow="lg"
              _hover={{ transform: "scale(1.02)", boxShadow: "2xl" }}
            >
              <Image src={product.thumbnail} alt={product.brand} w="full" h="200" />
              <Stack spacing={4} textAlign="center">
                <Text fontSize="xl" fontWeight="bold">{product.title}</Text>
                <Badge colorScheme="teal" mr={2}>
                  {product.category}
                </Badge>
                <Text>Brand: {product.brand}</Text>
                <Text>&#8377; {product.price}</Text>
                <Text>{product.description}</Text>
              </Stack>
            </Box>
          </GridItem>
        ))
      ) : (
        <Text>Loading products...</Text>
      )}
    </Grid>
  );
}
