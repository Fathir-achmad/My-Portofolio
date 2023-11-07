import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  PiArrowFatLineLeftFill,
  PiArrowFatLineRightFill,
} from "react-icons/pi";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const WorkPage = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Box p={4} bg="#edf3f8">
      <Flex
        justifyContent={"center"}
        flexDir={{ base: "column", lg: "row" }}
        gap={5}
      >
        <Flex
          cursor={"pointer"}
          onClick={() => handleClick("/skills")}
          align="center"
          justify={{ base: "center", lg: "flex-end" }}
          mb={{ base: 4, lg: 0 }}
        >
          <PiArrowFatLineLeftFill fontSize={35} />
        </Flex>
        <Flex>
          <Container
            maxW={"5xl"}
            py={12}
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            rounded="xl"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={7}>
              <Stack>
                <a
                  href="https://www.basuki.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text fontSize={30} fontWeight={"semibold"}>
                    PT. Basuki Pratama Engineering
                    <ExternalLinkIcon fontSize={15} />
                  </Text>
                </a>
                <Stack
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                    />
                  }
                >
                  <Text>
                    Designing electrical wiring diagrams for boilers and thermal
                    oil heaters
                  </Text>
                  <Text>
                    Deciding the list of instruments used based on the P&id
                    diagram
                  </Text>
                  <Text>Bill of material</Text>
                  <Text>Programming on PLC and design the display on HMI</Text>
                  <Text>
                    Perform Factory Acceptance Test (FAT) Site Acceptance
                    Testing (SAT)
                  </Text>
                </Stack>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={
                    "https://indonesiaproud.files.wordpress.com/2012/01/basuki-pe-di-indonesiaproud-wordpress-com.jpg?w=640"
                  }
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={
                    "https://www.ilcs.co.id/cfind/source/thumb/images/cover_w1440_h800_product---image-besar.jpg"
                  }
                  objectFit={"cover"}
                />
              </Flex>
              <Stack>
                <a
                  href="https://www.ilcs.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text fontSize={30} fontWeight={"semibold"}>
                    PT. Integrasi logistik cipta solusi
                    <ExternalLinkIcon fontSize={15} />
                  </Text>
                </a>
                <Stack
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.100", "gray.700")}
                    />
                  }
                >
                  <Text>
                    Support pilot and tug services at Indonesian port regional 2
                  </Text>
                  <Text>
                    Checking the issue report integration by ticket in website
                    service now Monitoring the integration of administrative
                    processes for incoming and outgoing ship services on website
                    inaportnet by Dephub
                  </Text>
                  <Text>
                    Monitoring website Simopel as a master data document for
                    ship services for inaportnet integration
                  </Text>
                  <Text>
                    Monitoring Marine operating system (MOS) as a planning
                    schedule application for ship services
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Flex>
        <Flex
          cursor={"pointer"}
          onClick={() => handleClick("/projects")}
          align="center"
          justify={{ base: "center", lg: "flex-start" }}
          mb={{ base: 4, lg: 0 }}
        >
          <PiArrowFatLineRightFill fontSize={35} />
        </Flex>
      </Flex>
    </Box>
  );
};
