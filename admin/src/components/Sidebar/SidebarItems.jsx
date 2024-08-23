import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function SidebarItems({ url, icon, children, ...rest }) {
  return (
    <Link to={url}>
      <Flex
        align='center'
        p='4'
        mx='4'
        mt='3'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'brown.400',
          color: 'green',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='22'
            _groupHover={{
              color: 'green',
            }}
          >
            {icon}
          </Icon>
        )}
        {children}
      </Flex>
    </Link>
  );
}