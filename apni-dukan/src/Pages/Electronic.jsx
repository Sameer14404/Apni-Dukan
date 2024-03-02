import { useEffect, useState } from "react"
import { Box, Image, Badge, Text, Stack } from '@chakra-ui/react';
import axios from "axios";
  async function fetchData(params) {
    let api = "https://dummyjson.com/products";

    try {
        const final = await axios.get(api, {
            params: {
                category: [params.filter1, params.filter2].join("&"),
            },
        });

        return final;
    } catch (error) {
      
        console.error("Error fetching data:", error);
        throw error;
    }
}

export default  function Electronic(){
const [data,setdata]=useState([]);
const filters = {
    filter1: "smartphones",
    filter2: "laptops",
  }
  useEffect(()=>{
    FetchingData()
  },[])
const FetchingData= async()=>{
    const res = await fetchData(filters);
setdata(res.data.products);
}
console.log(data)
    return<>
    { data && data.map((el)=> <Box
      maxW={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      key={el.id}
    >
      <Image src={el.thumbnail} alt={el.brand} />

      <Box p="4">
        <Stack spacing="1">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {el.brand}
          </Badge>
          <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontWeight="bold">
            ${`${el.price} RS`}
          </Text>
          <Box d="flex" mt="2" alignItems="center">
         
            Rating: {el.rating}
          </Box>
        </Stack>
      </Box>
    </Box>)}
    </>
}