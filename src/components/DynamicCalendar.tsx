import { Box, Flex, Heading, VStack, Input, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Calendar from './calendar/Calendar';


const DynamicCalendarInput: React.FC = () => {
  const initialDateString = "23/03/2020"; // DD/MM/YYYY
  
  const [dateInput, setDateInput] = useState(initialDateString);
  const [calendarDate, setCalendarDate] = useState(initialDateString);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(e.target.value);
  };

  const validateAndRender = () => {
    // Regex for basic validation: DD/MM/YYYY format
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

   if (!dateInput || dateInput.length === 0) {
    setValidationError("Input cannot be empty.");
    setCalendarDate(new Date().toLocaleDateString('en-GB'));
    return;
    }

    if (!dateRegex.test(dateInput)) {
    setValidationError("Must be in DD/MM/YYYY format.");
    return;
    }

    const parts = dateInput.split('/'); 
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10); 
    const year = parseInt(parts[2], 10);

    if (month < 1 || month > 12) {
        setValidationError("Month must be between 1 and 12.");
        return;
    }

    const testDate = new Date(year, month - 1, day);

    if (
        testDate.getFullYear() !== year ||
        testDate.getMonth() !== (month - 1) ||
        testDate.getDate() !== day
    ) {
        setValidationError("Invalid date (e.g., Feb 30th or Sep 31st).");
        return;
    }

    if (isNaN(testDate.getTime())) {
        setValidationError("Invalid date format.");
        return;
    }

    setValidationError('');
    setCalendarDate(dateInput);
  };

  return (
    <Flex direction="column" gap="16px" alignItems="center">
        <Heading size="md" textAlign="center">Dynamic DD/MM/YYYY Input</Heading>
        
        <VStack spacing={2} width="100%">
            <Flex width="100%" maxW="300px" gap={2}>
                <Input
                    placeholder="DD/MM/YYYY"
                    value={dateInput}
                    onChange={handleInputChange}
                    isInvalid={!!validationError}
                />
                <Button colorScheme="blue" onClick={validateAndRender} onKeyDown={(event)=> {
                    if (event.key === 'Enter') {
                        validateAndRender();
                    }
                }}>Render</Button>
            </Flex>
            {validationError && (
                <Text color="red.500" fontSize="sm">{validationError}</Text>
            )}
        </VStack>
        
        <Box mt={4}>
            <Calendar date={calendarDate} />
        </Box>
    </Flex>
  );
};

export default DynamicCalendarInput;