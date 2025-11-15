
import { Box, Flex, Grid, Heading, VStack } from '@chakra-ui/react';
import Calendar from './components/calendar/Calendar';

function App() {
  const today = new Date();
  

  return (
    <Box p={8}>
      <VStack spacing={8} align="start">
        <Heading size="lg">React Calendar Component Showcase</Heading>
            <Grid templateColumns={{base: '1fr', md: 'repeat(2,1fr)'}} gap="16px" width="100%" alignItems={"center"}>
                <Flex direction="column" gap="8px" alignItems={"center"}>
                    <Heading size="md">Current Date Highlighted</Heading>
                    <Calendar date={today} />
                </Flex>
                 <Flex direction="column" gap="8px" alignItems={"center"}>
                    <Heading size="md">Specific Date Highlighted</Heading>
                    <Calendar date={"03/10/2022"} />
                </Flex>
                 <Flex direction="column" gap="8px" alignItems={"center"}>
                    <Heading size="md">Specific Date Highlighted</Heading>
                    <Calendar date={"23/03/2020"} />
                </Flex>
            </Grid>
      </VStack>
    </Box>
  );
}

export default App;