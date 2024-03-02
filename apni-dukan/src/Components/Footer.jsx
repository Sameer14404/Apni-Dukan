import { Box, Flex, Text, Link, Divider } from "@chakra-ui/react";

 function Footer  ()  {
  return (
    <Box bg="gray.200" py="6">
      <Flex justify="space-around" maxW="1200px" mx="auto">
        {/* Navigation Section */}
        <Box>
        <Text fontSize="xl" fontWeight="bold">Sell on Qoo10</Text>
      <Text fontSize="lg">Seller Registration</Text>
      <Text fontSize="lg">Partnership</Text>
      <Text fontSize="lg">Selling Inquiry</Text>
      <Text fontSize="lg">Customer Lounge</Text>
      <Text fontSize="lg">Q·lounge</Text>
        </Box>

        {/* Bestsellers Section */}
        <Box>
          <Text fontWeight="bold" mb="2">Bestsellers</Text>
          <Text fontSize="lg"> Todays Sale</Text>
      <Text fontSize="lg">Qspecials</Text>
      <Text fontSize="lg">Brand Avenue</Text>
      <Text fontSize="lg">Qprime Shop</Text>
      <Text fontSize="lg">Gift & Voucher Shop</Text>
      <Text fontSize="lg">Live Shop</Text>



          
          {/* Add other bestsellers links */}
        </Box>

        {/* Seller Section */}
        <Box>
        <Text fontSize="xl" fontWeight="bold">Customer Service</Text>
      <Text fontSize="lg">My Inquiries</Text>
      <Text fontSize="lg">FAQ</Text>
      <Text fontSize="lg">User Agreement</Text>
      <Text fontSize="lg">Privacy Policy</Text>
      <Text fontSize="lg">Contact Us</Text>
      <Text fontSize="lg">Security Center</Text>
      <Text fontSize="lg">Qsafe Program</Text>
       
        </Box>

   
        
        <Box>
      <Text fontSize="xl" fontWeight="bold">About Qoo10</Text>
      <Text fontSize="lg">About Us</Text>
      <Link fontSize="lg" href="https://www.facebook.com/Qoo10Global" isExternal>
        Qoo10 on Facebook
      </Link>
      <Link fontSize="lg" href="https://www.instagram.com/qoo10_global/" isExternal>
        Qoo10 on Instagram
      </Link>
      <Text fontSize="lg">Press Release</Text>
      <Text fontSize="lg">Qoo10 Notice</Text>
        </Box>
      </Flex>

      {/* Divider */}
      <Divider my="4" />

      {/* Secondary Links Section */}
      <Flex justify="space-around" maxW="1200px" mx="auto">
        <Box>
          <Text fontWeight="bold" mb="2">About Qoo10</Text>
          <Link href="#" mr="2">About Us</Link>
          <Link href="#" mr="2">Qoo10 on Facebook</Link>
          {/* Add other about Qoo10 links */}
        </Box>

        <Box>
          <Text fontWeight="bold" mb="2">Tools</Text>
          <Link href="#" mr="2">QSM (Seller Tool)</Link>
          <Link href="#" mr="2">Qpost (CS Tool)</Link>
          {/* Add other tools links */}
        </Box>

        <Box>
          <Text fontWeight="bold" mb="2">Family Sites</Text>
          <Link href="#" mr="2">Singapore</Link>
          <Link href="#" mr="2">Indonesia</Link>
          {/* Add other family sites links */}
        </Box>
      </Flex>

      {/* Divider */}
      <Divider my="4" />

      {/* Footer Bottom Section */}
      <Flex justify="space-around" maxW="1200px" mx="auto">
        <Box>
          <Text>&copy; 2024 Qoo10. All rights reserved.</Text>
        </Box>

        {/* Add other footer content like security badges, social media links, etc. */}
      </Flex>
    </Box>
  );
};

export default Footer;
