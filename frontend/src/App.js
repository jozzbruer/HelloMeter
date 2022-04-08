import React, { lazy, Suspense } from 'react';
import './App.css';

const Home = lazy(() => import('./components/home/Home'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navbar />
			<Home />
		</Suspense>
	);
}

export default App;
