import { render } from '@testing-library/react';
import Navbar from '../components/navbar/Navbar';

describe('<Navbar />', () => {
	it('Render without Crashing', () => {
		render(<Navbar />);
	});

	it('Should show the logo', () => {
		const logo = render(<Navbar />);
		logo.getAllByText(/A K A D E M I X/i);
	});
});
