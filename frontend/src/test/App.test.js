import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
	it('Render without Crashing', () => {
		render(<App />);
	});
});
