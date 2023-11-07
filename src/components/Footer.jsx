import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box bg={"black"} color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Fathir achmad sabiilah© 2023. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"WhatsApp"} href={"https://wa.me/6282210119007"}>
            <BsWhatsapp />
          </SocialButton>
          <SocialButton label={"Email"} href={"mailto:fathir17.fa@gmail.com"}>
            <SiGmail />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
