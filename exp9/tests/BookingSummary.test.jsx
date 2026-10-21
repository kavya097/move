import { render, screen } from '@testing-library/react';
import BookingSummary from '../src/Components/BookingSummary.jsx';
test('shows booking details and calculated price', () => { render(<BookingSummary movie={{title:'Master',price:180}} theater='PVR Cinemas' showTime='7:30 PM' seats={['S1','S2']} />); expect(screen.getByText('₹180 × 2')).toBeInTheDocument(); expect(screen.getByText('₹360')).toBeInTheDocument(); expect(screen.getByText('S1, S2')).toBeInTheDocument(); });
