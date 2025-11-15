import { Box, Grid } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { generateCalendarGrid } from '../../utils/date';
import { CalendarProps } from '../../types/calendar';
import CalendarHeader from './CalendarHeader';
import DayLabels from './DayLabels';
import DateCell from './DateCell';

const Calendar: React.FC<CalendarProps> = ({ date }) => {
    
    const normalizedDate = useMemo(() => {
        if (date instanceof Date) {
            return date;
        }
        const parts = date.split('/');
        let parsedDate: Date;
        
        if (parts.length === 3) {
            // Format: DD/MM/YYYY
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);
            
            parsedDate = new Date(year, month - 1, day);
        } else {
            // Attempt to parse any other format (like YYYY-MM-DD or MM/DD/YYYY)
            parsedDate = new Date(date);
        }
        
        // --- Validation ---
        if (isNaN(parsedDate.getTime())) {
            console.error(`Invalid date string passed to Calendar: ${date}`);
            return new Date(); // Fallback to today if parsing fails
        }
        return parsedDate;
    }, [date]);

    const highlightedDay = normalizedDate.getDate();
    const calendarGrid = useMemo(() => generateCalendarGrid(normalizedDate), [normalizedDate]);

    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            shadow="xl" 
            maxWidth="400px"
            bg="white"
        >
            <CalendarHeader date={normalizedDate} />
            
            <DayLabels />

            <Grid templateColumns="repeat(7, 1fr)" gap={1} p={2}>
                {calendarGrid.flat().map((dayNumber, index) => {
                    const isHighlighted = dayNumber !== null && dayNumber === highlightedDay;

                    return (
                        <DateCell 
                            key={index} 
                            dayNumber={dayNumber} 
                            isHighlighted={isHighlighted} 
                        />
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Calendar;