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
          <div className='tabs__wrapper'>
            <Tab>Brand</Tab>
            <Tab>Body type</Tab>
            <Tab>Three</Tab>
            <TabIndicator mt='-1.5px' height='4px' bg='#34a46a' />
          </div>
        </TabList>
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
