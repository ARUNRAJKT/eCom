import React from "react";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { MdPendingActions, MdDeliveryDining } from "react-icons/md";
import {
  Flex,
  Icon,
  Square,
  Spacer,
  Text,
  Heading,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

// Dummy data to replace commented parts
const orders = [];
const pending_orders = [];
const delivered_orders = [];
const total_revenue = 123456; // Example value

// Format price function
const formatPrice = (amount) => `₹${amount.toLocaleString()}`;

export default function Dashboard() {
  const cardList = [
    {
      title: "Total Orders",
      value: orders.length,
      icon: FaShoppingCart,
      color: "brown.500",
    },
    {
      title: "Pending Orders",
      value: pending_orders.length,
      icon: MdPendingActions,
      color: "red.500",
    },
    {
      title: "Delivered Orders",
      value: delivered_orders.length,
      icon: MdDeliveryDining,
      color: "blue.500",
    },
    {
      title: "Total Revenue",
      value: formatPrice(total_revenue),
      icon: FaRupeeSign,
      color: "green.500",
    },
  ];

  return (
    <SimpleGrid minChildWidth="250px" spacing={5} mb={5}>
      {cardList.map((card, index) => {
        const { title, value, icon, color } = card;
        return (
          <Flex
            key={index}
            shadow="lg"
            bg="white"
            p="5"
            borderRadius="lg"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Text fontSize="1xl" color="gray.500">
                {title}
              </Text>
              <Heading size="lg" color={color}>
                {value}
              </Heading>
            </Box>
            <Spacer />
            <Square size="60px" bg={color} borderRadius="lg">
              <Icon as={icon} color="white" />
            </Square>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
}
