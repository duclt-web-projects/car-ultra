import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

const QuickFilter = () => {
  return (
    <div className='quick-filter'>
      <h2 className='heading'>Find The Cars Of Your Choice</h2>
      <Tabs position='relative' variant='unstyled'>
        <TabList>
          <Tab>Brand</Tab>
          <Tab>Body type</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='4px' bg='blue.500' />
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
    </div>
  );
};

export default QuickFilter;
