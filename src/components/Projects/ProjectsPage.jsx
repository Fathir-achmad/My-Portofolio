import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Frontend } from "./components/FrontEnd";
import { Backend } from "./components/Backend";

export const ProjectsPage = () => {

  return (
    <Box p={4} bg="#edf3f8">
     
      <Flex
        minH="100vh"
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex p={30} mr={20} >
          <Tabs isLazy>
            <TabList>
              <Tab>Frontend</Tab>
              <Tab>Backend</Tab>
            </TabList>
            <TabPanels>
              {/* initially mounted */}
              <TabPanel>
                <Frontend />
              </TabPanel>
              {/* initially not mounted */}
              <TabPanel>
                <Backend />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
};
