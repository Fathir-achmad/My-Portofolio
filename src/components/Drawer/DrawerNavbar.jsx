import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const DrawerNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Box bgColor={"black"}>
      <Button
        onClick={onOpen}
        ref={btnRef}
        cursor={"pointer"}
        display={{ base: "block", md: "none" }}
        bgColor={"transparent"}
        size="lg" 
      >
        <HiMenuAlt1 fontSize={30} color="white"/>
      </Button>
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
          <DrawerHeader>{" "}</DrawerHeader>
          <DrawerBody>
            <Stack spacing={20} px={"10px"}>
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
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
