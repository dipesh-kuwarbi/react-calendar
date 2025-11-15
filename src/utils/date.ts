
export const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const generateCalendarGrid = (date: Date): (number | null)[][] => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);

    const startingDayIndex = firstDayOfMonth.getDay(); 

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarGrid: (number | null)[][] = [];
    let dayCounter = 1;
    let currentRow: (number | null)[] = [];


    for (let i = 0; i < startingDayIndex; i++) {
        currentRow.push(null);
    }

    while (dayCounter <= daysInMonth || currentRow.length > 0) {
        if (dayCounter <= daysInMonth) {
            currentRow.push(dayCounter);
            dayCounter++;
        } else if (currentRow.length < 7) {
            currentRow.push(null);
        }

        if (currentRow.length === 7) {
            calendarGrid.push(currentRow);
            currentRow = [];
        }
    }

    return calendarGrid;
};

export const formatHeaderDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
};