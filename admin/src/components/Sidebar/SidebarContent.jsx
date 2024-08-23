import React, { useState, useEffect } from 'react';
import SideItem from './SidebarItems'; // Ensure this component is correctly implemented
import { LinkItems } from '../../utilits/constant'; // Ensure this file exports an array of link items
// import { useUserContext } from '../context/user_context'; // Uncomment and use if user context is implemented
import logo from '../../assests/logo.png'; 
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Image,
  Text,
} from '@chakra-ui/react';

export default function SidebarContent({ onClose, ...rest }) {
  // const {
  //   currentUser: { privilege },
  // } = useUserContext();

  const [Links, setLinks] = useState([]);

  useEffect(() => {
    // This logic is based on user privilege. Uncomment and adjust based on your context
    // if (privilege === 'super') {
    //   setLinks(LinkItems);
    // } else if (privilege === 'moderate') {
    //   const tempLinks = LinkItems.filter((link) => link.name !== 'Admins');
    //   setLinks(tempLinks);
    // } else if (privilege === 'low') {
    //   const tempLinks = LinkItems.filter(
    //     (link) => link.name !== 'Admins' && link.name !== 'Products'
    //   );
    //   setLinks(tempLinks);
    // }
    
    // For now, using static links as example
    setLinks(LinkItems);
  }, []); // Add dependencies if needed

  return (
    <Box
      transition='0.3s ease'
      bg={useColorModeValue('gray.800', 'gray.900')} // Light mode and dark mode backgrounds
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.700', 'gray.600')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      color={useColorModeValue('gray.100', 'gray.200')} // Light mode and dark mode text color
      fontFamily='Arial, sans-serif' // Font family
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Image src={logo} alt="Logo" boxSize='66px' />ADMIN PANEL
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex><br />
      {Links.map((link) => (
        <SideItem key={link.name} icon={link.icon}  url={link.url}>
          <Text fontSize='lg' fontWeight='semibold'>{link.name}</Text> 
        </SideItem>
      ))}
    </Box>
  );
}
