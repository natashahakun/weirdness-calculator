import React from 'react';
import PropTypes from 'prop-types';
import { Card, Error, Header, Liked, Result, Search } from './components';
import { WeirdnessLayout } from './layouts';
import { connect } from 'react-redux';

function App({ error, hasResult }) {
	return (
		<div className="app">
			{ error && <Error>{ error }</Error> }
			<Header children="Weirdness Calculator" />

			<WeirdnessLayout
				top={
					<Card>
						<p>Find out how weird you are by selecting the GIFs that make you laugh. We’ll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
						<p>When you find a GIF you like, press the Like button. Once you like 5 GIFs, we’ll show you how weird you are.</p>

						<Search />
					</Card>
				}
				bottom={
					hasResult ? <Result /> : <Card>Search for a new gif!</Card>
				}
				panel={
					<Card>
						<Liked />
					</Card>
				}
			/>
		</div>
	);
}

App.defaultProps = {
	hasResult: null
}

App.propTypes = {
	hasResult: PropTypes.string || null,
	liked: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
        })
    )
}

const mapStateToProps = ({ error, result }) => ({
	error: error.message,
	hasResult: result.url
});

export default connect(mapStateToProps)(App);
