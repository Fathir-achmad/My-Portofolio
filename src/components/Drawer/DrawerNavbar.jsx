import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const DrawerNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("/");

  const handleClick = (path) => {
    navigate(path);
    setActivePage(path); // Mengatur halaman yang aktif saat ini
  };

  const isActive = (path) => {
    return path === activePage ? "black" : "gray"; // Mengatur warna berdasarkan halaman yang aktif
  };

  return (
    <Box bgColor={"black"}>
      <IconButton
        aria-label="Menu"
        icon={<HiMenuAlt1 fontSize={30} color="white" />}
        onClick={onOpen}
        bgColor={"transparent"}
        size="lg"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            colorScheme="red"
            _hover={{ backgroundColor: "red", color: "white" }}
          />
          <DrawerHeader> </DrawerHeader>
          <DrawerBody>
            <Stack spacing={20} px={"10px"}>
              <Text fontSize="2xl" fontWeight="bold" color={isActive("/")}>
                <Link onClick={() => handleClick("/")}>Home</Link>
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color={isActive("/about")}>
                <Link onClick={() => handleClick("/about")}>About</Link>
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={isActive("/education")}
              >
                <Link onClick={() => handleClick("/education")}>Education</Link>
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={isActive("/skills")}
              >
                <Link onClick={() => handleClick("/skills")}>Skills</Link>
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color={isActive("/work")}>
                <Link onClick={() => handleClick("/work")}>Work</Link>
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={isActive("/projects")}
              >
                <Link onClick={() => handleClick("/projects")}>Projects</Link>
              </Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
