import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieCard from '../src/Components/MovieCard.jsx';
const movie = { id: 1, title: 'Master', year: 2021, genre: 'Action', language: 'Tamil', description: 'Action thriller', price: 180, image: '/posters/master.svg' };
test('renders movie card and booking link', () => { render(<MemoryRouter><MovieCard movie={movie} /></MemoryRouter>); expect(screen.getByRole('heading', { name: 'Master' })).toBeInTheDocument(); expect(screen.getByRole('img', { name: 'Master movie poster' })).toHaveAttribute('loading', 'lazy'); expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '/movie/1'); });
