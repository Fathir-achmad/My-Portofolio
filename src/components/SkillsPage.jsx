import React from "react";
import { Flex, Box, chakra, Icon, Stack } from "@chakra-ui/react";
import { GiElectric, GiElectricalResistance } from "react-icons/gi";
import { TbApi, TbBrandNextjs, TbFilePower } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  SiChakraui,
  SiExpress,
  SiJavascript,
  SiMinutemailer,
  SiMysql,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiSpringsecurity,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  PiArrowFatLineLeftFill,
  PiArrowFatLineRightFill,
} from "react-icons/pi";

const Feature = (props) => {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Flex
        alignItems="center"
        justifyContent="center"
        h={12}
        w={12}
        rounded="md"
        _light={{
          bg: "brand.500",
        }}
      >
        <Icon
          boxSize={12}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
      </Flex>
      <Box>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          _light={{
            color: "gray.900",
          }}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd
          mt={2}
          color="gray.500"
          _dark={{
            color: "gray.400",
          }}
        >
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

export const SkillsPage = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <Box bg="#edf3f8" p="19px 30px">
      <Flex
        _dark={{
          bg: "#3e3e3e",
        }}
        w="auto"
        justifyContent="center"
        alignItems="center"
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: "3", lg: "8" }}
      >
        <Flex
          cursor={"pointer"}
          onClick={() => handleClick("/education")}
          align="center"
          justify={{ base: "center", lg: "flex-end" }}
          mb={{ base: 4, lg: 0 }}
        >
          <PiArrowFatLineLeftFill fontSize={35} />
        </Flex>
        <Box
          py={12}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          rounded="xl"
        >
          <Box
            maxW="7xl"
            mx="auto"
            px={{
              base: 4,
              lg: 8,
            }}
          >
            <Box>
              <Stack
                spacing={{
                  base: 10,
                  md: 5,
                }}
                display={{
                  md: "grid",
                }}
                gridTemplateColumns={{
                  md: "repeat(3,1fr)",
                }}
                gridColumnGap={{
                  md: 8,
                }}
                gridRowGap={{
                  md: 10,
                }}
              >
                <Feature
                  title="Wiring and simulation software design"
                  icon={<GiElectricalResistance />}
                />
                <Feature
                  title="Software design hybrid power"
                  icon={<TbFilePower />}
                />
                <Feature title="Bricscad" icon={<MdOutlineDesignServices />} />
                <Feature title="Stardelta & DOL" icon={<GiElectric />} />
                <Feature title="JavaScript" icon={<SiJavascript />} />
                <Feature title="Chakra UI" icon={<SiChakraui />} />
                <Feature title="React JS" icon={<GrReactjs />} />
                <Feature title="Next JS" icon={<TbBrandNextjs />} />
                <Feature title="Redux" icon={<SiRedux />} />
                <Feature title="React-router-dom" icon={<SiReactrouter />} />
                <Feature
                  title="My Sql with sequelize as ORM"
                  icon={<SiMysql />}
                />
                <Feature title="Express-JS" icon={<SiExpress />} />
                <Feature title="NodeJs" icon={<FaNodeJs />} />
                <Feature title="Git" icon={<FaGithub />} />
                <Feature title="Rest API" icon={<TbApi />} />
                <Feature title="Postman" icon={<SiPostman />} />
                <Feature title="Nodemailer" icon={<SiMinutemailer />} />
                <Feature title="Bcrypt & JWT" icon={<SiSpringsecurity />} />
              </Stack>
            </Box>
          </Box>
        </Box>
        <Flex
          cursor={"pointer"}
          onClick={() => handleClick("/work")}
          align="center"
          justify={{ base: "center", lg: "flex-end" }}
          mt={{ base: 4, lg: 3 }}
        >
          <PiArrowFatLineRightFill fontSize={35} />
        </Flex>
      </Flex>
    </Box>
  );
};
