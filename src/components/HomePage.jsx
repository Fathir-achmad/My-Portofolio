import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const HomePage = () => {
  const handleClickMedsos = (path) => {
    window.open(path);
  };

  return (
    <>
      <Flex
        minH="100vh"
        justifyContent={"center"}
        alignItems={"center"}
        gap={20}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex
          borderRadius="10px"
          shadow={{ base: "none", lg: "md" }}
          w={{ base: "full", lg: "400px" }}
          h={{ base: "inherit", lg: "400px" }}
          p={1}
          justify="center"
        >
          <Image
            src={`/ava.png`}
            objectFit="cover"
            borderRadius={"20px"}
            maxW={{ base: "400px", lg: "400px" }}
          />
        </Flex>
        <Flex
          direction="column"
          maxW={{ base: "full", lg: "25%" }}
          gap={5}
          color="black"
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Flex direction={{ base: "column-reverse", lg: "column" }} gap={2}>
            <Text fontSize={20} fontWeight={"semibold"}>
              Hi there! I'm
            </Text>
          </Flex>
          <Box>
            <Text fontWeight={"bold"} fontSize={30}>
              Fathir Achmad Sabiilah
            </Text>
            <Divider borderWidth={1} />
          </Box>
          <Text fontSize={20} fontWeight={"semibold"}>
            Electrical engineer and Full stack JavaScript developer
          </Text>
          <Flex gap={5}>
            <Flex
              cursor={"pointer"}
              onClick={() =>
                handleClickMedsos(
                  "https://www.linkedin.com/in/fathirachmads/",
                  "_blank"
                )
              }
              _hover={{
                color: "blue.500",
              }}
            >
              <BsLinkedin fontSize={35} />
            </Flex>
            <Flex
              cursor={"pointer"}
              onClick={() =>
                handleClickMedsos("https://github.com/Fathir-achmad", "_blank")
              }
              _hover={{
                color: "purple.500",
              }}
            >
              <BsGithub fontSize={35} />
            </Flex>
            <Flex
              cursor={"pointer"}
              onClick={() =>
                handleClickMedsos(
                  "https://www.instagram.com/fathirachmads/",
                  "_blank"
                )
              }
              _hover={{
                color: "orange.500",
              }}
            >
              <BsInstagram fontSize={35} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
