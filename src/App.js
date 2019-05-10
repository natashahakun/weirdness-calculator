import React from 'react';
import { Card, Header, Search } from './components';

function App() {
	return (
		<div className="app">
			<Header children="Weirdness Calculator" />

			<Card>
				<p>Find out how weird you are by selecting the GIFs that make you laugh. We’ll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
				<p>When you find a GIF you like, press the Like button. Once you like 5 GIFs, we’ll show you how weird you are.</p>

				<Search />
			</Card> 
		</div>
	);
}

export default App;
