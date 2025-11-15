
import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

interface DateCellProps {
    dayNumber: number | null;
    isHighlighted: boolean;
}

const DateCell: React.FC<DateCellProps> = ({ dayNumber, isHighlighted }) => {
    if (dayNumber === null) {
        return <Box h="10" />; 
    }

    return (
        <Center
            h="10"
            w="10"
            borderRadius="full"
            bg={isHighlighted ? 'blue.500' : 'transparent'}
            color={isHighlighted ? 'white' : 'gray.800'}
            fontWeight={isHighlighted ? 'bold' : 'normal'}
            cursor="default"
            transition="all 0.1s"
        >
            <Text>{dayNumber}</Text>
        </Center>
    );
};

export default DateCell;