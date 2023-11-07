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

export const Backend = () => {
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
            image={"/be-blog.png"}
            description={
              "This is from the backend side for the low blog application"
            }
            href={"https://github.com/Fathir-achmad/minpro_BE"}
          />
          <Card
            heading={"Twotter"}
            image={"/be-twitter.png"}
            description={
              "This is from the backend side for the twotter application"
            }
            href={"https://github.com/Fathir-achmad/Backend-twitter"}
          />
          <Card
            heading={"Cashier app"}
            image={"/be-cashier.png"}
            description={
              "This is from the backend side for the cashier application"
            }
            href={"https://github.com/Fathir-achmad/JCWD0108-01"}
          />
          <Card
            heading={"Employee presence"}
            image={"/be-absen.png"}
            description={
              "This is from the backend side for the e-presence application"
            }
            href={"https://github.com/Fathir-achmad/BE-Selection_test"}
          />
          <Card
            heading={"Techtok.id"}
            image={"/be-techtok.png"}
            description={
              "This is from the backend side for the techtok application"
            }
            href={"https://adminer2.purwadhikabootcamp.com/"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
