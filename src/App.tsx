
import { Box, Flex, Grid, Heading, VStack } from '@chakra-ui/react';
import Calendar from './components/calendar/Calendar';
import DynamicCalendarInput from './components/DynamicCalendar';

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
                <DynamicCalendarInput />
            </Grid>
      </VStack>
    </Box>
  );
}

export default App;