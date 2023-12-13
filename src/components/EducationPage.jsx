import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcCollaboration,
  FcConferenceCall,
  FcDiploma2,
  FcGraduationCap,
  FcOrganization,
} from "react-icons/fc";
function Card({ heading, description, icon, href }) {
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
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
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
          See more
        </Button>
      </Stack>
    </Box>
  );
}

export const EducationPage = () => {
  return (
    <Box bg="#edf3f8" minH="100vh">
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
          p="102px 30px"
        >
          <Card
            heading={"Elementary school"}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={"At Madrasah ibtidaiyah Al-Murtadlo."}
            href={"https://www.instagram.com/almurtadlocikampek/"}
          />
          <Card
            heading={"Junior high school"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={"At SMPN 1 Cikampek."}
            href={"https://smpn1cikampek.sch.id/"}
          />
          <Card
            heading={"Senior high school"}
            icon={<Icon as={FcOrganization} w={10} h={10} />}
            description={"At SMAN 5 Karawang."}
            href={"https://sman5krw.sch.id/"}
          />
          <Card
            heading={"College"}
            icon={<Icon as={FcGraduationCap} w={10} h={10} />}
            description={"At Telkom university."}
            href={"https://telkomuniversity.ac.id/"}
          />
          <Card
            heading={"Purwadhika"}
            icon={<Icon as={FcDiploma2} w={10} h={10} />}
            description={"Fullstack javascript developer."}
            href={"https://purwadhika.com/"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
