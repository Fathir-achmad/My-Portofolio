import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function Card({ heading, description, image, href }) {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg={"white"}
    >
      <Stack align={"start"} spacing={2}>
        <Image
          src={image}
          objectFit="cover"
          borderRadius={"20px"}
          h="100%"
        />
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          colorScheme={"blue"}
          size={"sm"}
        >
          Details
        </Button>
      </Stack>
    </Box>
  );
}

export const Frontend = () => {
  return (
    <Box p={4}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
      ></Stack>

      <Flex
        justifyContent={"center"}
        flexDir={{ base: "column", lg: "row" }}
        gap={5}
      >
        <Flex
          flexWrap="wrap"
          gridGap={6}
          justify="center"
          alignItems={"center"}
        >
          <Card
            heading={"Lowblog app"}
            image={"/lowblog.png"}
            description={
              "My blog is a blogging application where users can create their own articles or likes other people's articles."
            }
            href={"https://stunning-babka-9af8d6.netlify.app/"}
          />
          <Card
            heading={"Twotter"}
            image={"/twotter.png"}
            description={
              "Twotter is an imitation application like Twitter that can create posts and upload images along with captions and all the tweets from users."
            }
            href={"https://github.com/Fathir-achmad/Frontend-twitter"}
          />
          <Card
            heading={"Cashier app"}
            image={"/cashier.png"}
            description={
              "A cashier app is an application designed to assist the waiter in ordering food and it also includes a payment simulation feature."
            }
            href={"https://github.com/Fathir-achmad/JCWD0108-01"}
          />
          <Card
            heading={"Employee presence"}
            image={"/presence.png"}
            description={
              "E-presence is an application for employee attendance along with reports on the employee's attendance and salary."
            }
            href={"https://stunning-babka-9af8d6.netlify.app/"}
          />
          <Card
            heading={"Techtok.id"}
            image={"/techtok.png"}
            description={
              "Multi Storage E-commerce is an e-commerce application that employs more than one warehouse for storing its products."
            }
            href={"https://jcwd010802.purwadhikabootcamp.com/"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
