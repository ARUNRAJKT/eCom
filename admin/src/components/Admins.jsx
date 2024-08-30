import React, { useState } from 'react';
import { getAdminPrivilegeColor } from '../utilits/helpers';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  SimpleGrid,
  Spinner,
  Select,
  useToast,
  HStack,
} from '@chakra-ui/react';

export default function Admins({ admins = [] }) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  // Placeholder function for handling privilege changes
  const handleEdit = async (e, id) => {
    setLoading(true);
    const privilege = e.target.value;
    setLoading(false);
    toast({
      position: 'top',
      description: `Admin privilege changed to ${privilege}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  // Placeholder function for handling admin deletion
  const handleDelete = async (id) => {
    setLoading(true);
    setLoading(false);
    toast({
      position: 'top',
      description: `Admin deleted`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <SimpleGrid bg='white' p={5} shadow='lg' borderRadius='lg' overflowX='auto'>
      {loading ? (
        <HStack my={8} alignItems='center' justifyContent='center'>
          <Spinner size='lg' color='brown.500' />
        </HStack>
      ) : (
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Privilege</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {admins.map((admin, index) => {
              const { name, email, privilege, id: adminId } = admin;
              return (
                <Tr key={index}>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>
                    <Badge colorScheme={getAdminPrivilegeColor(privilege)}>
                      {privilege}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing='5'>
                      <Select
                        maxW={125}
                        focusBorderColor='brown.500'
                        value={privilege}
                        onChange={(e) => handleEdit(e, adminId)}
                      >
                        <option value='super'>Super</option>
                        <option value='moderate'>Moderate</option>
                        <option value='low'>Low</option>
                      </Select>
                      <Button
                        variant='outline'
                        colorScheme='red'
                        onClick={() => handleDelete(adminId)}
                      >
                        Delete
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </SimpleGrid>
  );
}
