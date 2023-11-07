import React from "react";
import { Flex, Text, Link, Box, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DrawerNavbar } from "./Drawer/DrawerNavbar";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMediumScreen] = useMediaQuery("(max-width: 768px)");
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {isMediumScreen ? (
        <DrawerNavbar />
      ) : (
        <Flex
          as="nav"
          justify="center"
          alignItems={["center", "center", "center", "flex-start"]}
          gap={20}
          padding="1rem"
          bg="black"
          color="white"
          w="full"
          zIndex="200"
          flexWrap="wrap"
        >
          <Text fontSize="2xl" fontWeight="bold">
            <Link onClick={() => handleClick("/about")}>About</Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link onClick={() => handleClick("/education")}>Education</Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link onClick={() => handleClick("/skills")}>Skills</Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link onClick={() => handleClick("/work")}>Work</Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link onClick={() => handleClick("/projects")}>Projects</Link>
          </Text>
        </Flex>
      )}
    </Box>
  );
};
