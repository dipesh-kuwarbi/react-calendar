import { Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { DAY_LABELS } from '../../utils/date';

const DayLabels: React.FC = () => {
    return (
        <Grid templateColumns="repeat(7, 1fr)" gap={1} p={2}>
            {DAY_LABELS.map((day) => (
                <Text 
                    key={day} 
                    fontSize="sm" 
                    fontWeight="medium" 
                    color="gray.500" 
                    textAlign="center"
                >
                    {day}
                </Text>
            ))}
        </Grid>
    );
};

export default DayLabels;