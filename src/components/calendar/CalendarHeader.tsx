import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { formatHeaderDate } from '../../utils/date';

interface CalendarHeaderProps {
    date: Date;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ date }) => {
    return (
        <Box 
            p={4} 
            textAlign="center" 
            bg="gray.50" 
            borderTopRadius="lg"
            borderBottom="1px"
            borderColor="gray.200"
        >
            <Text fontSize="xl" fontWeight="semibold" color="gray.700">
                {formatHeaderDate(date)}
            </Text>
        </Box>
    );
};

export default CalendarHeader;