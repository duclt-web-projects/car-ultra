import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

const QuickTabs = () => {
  return (
    <Tabs position='relative' variant='unstyled'>
      <TabList>
        <Tab>Brand</Tab>
        <Tab>Body type</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default QuickTabs;
