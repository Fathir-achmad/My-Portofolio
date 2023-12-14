import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const AboutPage = () => {
  
  return (
    <>
      <Flex
        minH="100vh"
        p={5}
        justifyContent={"center"}
        alignItems={"center"}
        gap={20}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex
          direction="column"
          maxW={{ base: "full", lg: "25%" }}
          gap={5}
          color="black"
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Heading size="lg" fontWeight={"bold"}>
            From electrical to be a developer
          </Heading>
          <Divider borderWidth={1} />
          <Flex direction="column" gap={3}>
            <Text fontWeight={"semibold"}>
              I am a graduate of Telkom University in Bandung with a bachelor's
              degree in electrical engineering, specializing in the field of
              renewable energy. After graduating, I began my career as an
              electrical engineer. Simultaneously, my interest in IT development
              emerged during the pandemic, which required everything to be
              conducted online. Consequently, I decided to enroll in a bootcamp
              as a full-stack JavaScript developer in purwadhika digital
              technology school, and now, after completing the bootcamp, I am
              trying to pursue a career as a developer.
            </Text>
          </Flex>
        </Flex>
        <Flex
          borderRadius="10px"
          shadow={{ base: "none", lg: "md" }}
          w={{ base: "full", lg: "400px" }}
          h={{ base: "400px", lg: "400px" }}
          p={1}
          justify="center"
        >
          <Image
            src={"/fathir.jpg"}
            objectFit="cover"
            borderRadius={"20px"}
            h="100%"
          />
        </Flex>
      </Flex>
    </>
  );
};
