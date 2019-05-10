import React from 'react';
import PropTypes from 'prop-types';
import { Card, Header, Result, Search } from './components';
import { connect } from 'react-redux';

function App({ hasResult }) {
	return (
		<div className="app">
			<Header children="Weirdness Calculator" />

			<Card>
				<p>Find out how weird you are by selecting the GIFs that make you laugh. We’ll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
				<p>When you find a GIF you like, press the Like button. Once you like 5 GIFs, we’ll show you how weird you are.</p>

				<Search />
			</Card> 

			{ hasResult && <Result /> }
		</div>
	);
}

App.defaultProps = {
	hasResult: null
}

App.propTypes = {
	hasResult: PropTypes.string || null
}

const mapStateToProps = ({ result }) => ({
	hasResult: result.url
});

export default connect(mapStateToProps)(App);
