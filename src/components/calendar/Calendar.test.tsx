
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

const getHighlightedDay = () => screen.getByRole('button', { current: true });

describe('Calendar Component (Dynamic Tests)', () => {
    
    it('Renders and highlights the current system date correctly', () => {
        const today = new Date();
        const expectedDay = today.getDate().toString();
        const expectedHeader = today.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        });
        
        render(<Calendar date={today} />);
        
        // Check Header
        expect(screen.getByText(expectedHeader)).toBeInTheDocument();

        // Check Highlighted Day (The element whose inner text is the day number)
        const highlightedCell = screen.getByText(expectedDay);
        
        // This checks if the live date is highlighted based on the component's styling
        expect(highlightedCell.closest('div')).toHaveStyle('background-color: var(--chakra-colors-blue-500)');
    });
});