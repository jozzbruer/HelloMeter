import { render } from '@testing-library/react';
import Home from '../components/home/Home';

describe('<Navbar />', () => {
	it('Render without Crashing', () => {
		render(<Home />);
	});

	it('Should show the logo', () => {
		const logo = render(<Home />);
		logo.getAllByText(/Students By Course 2015/i);
	});
});
