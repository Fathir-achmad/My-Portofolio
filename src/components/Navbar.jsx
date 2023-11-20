import React from "react";
import { Flex, Text, Link, Box, useMediaQuery } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { DrawerNavbar } from "./Drawer/DrawerNavbar";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMediumScreen] = useMediaQuery("(max-width: 768px)");
  const { pathname } = useLocation();

  const currentPath = pathname.replace(window.location.origin, "");

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
            <Link
              onClick={() => handleClick("/")}
              style={{
                color: currentPath === "/" ? "gray" : "white"
              }}
            >
              Home
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link
              onClick={() => handleClick("/about")}
              style={{
                color: currentPath === "/about" ? "gray" : "white"
              }}
            >
              About
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link
              onClick={() => handleClick("/education")}
              style={{
                color: currentPath === "/education" ? "gray" : "white"
              }}
            >
              Education
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link
              onClick={() => handleClick("/skills")}
              style={{
                color: currentPath === "/skills" ? "gray" : "white"
              }}
            >
              Skills
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link
              onClick={() => handleClick("/work")}
              style={{
                color: currentPath === "/work" ? "gray" : "white"
              }}
            >
              Work
            </Link>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Link
              onClick={() => handleClick("/projects")}
              style={{
                color: currentPath === "/projects" ? "gray" : "white"
              }}
            >
              Projects
            </Link>
          </Text>
        </Flex>
      )}
    </Box>
  );
};
