import React from 'react';
import PropTypes from 'prop-types';
import { Card, Error, Header, Liked, Result, Search, Slider } from './components';
import { WeirdnessLayout } from './layouts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateWeirdness } from './actions/search.actions';

function App({ error, hasResult, updateWeirdness, weirdness }) {
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
                    hasResult ?
                        <Card>
                            <Result />

                            <Slider id="slider" value={weirdness} onChange={(event) => updateWeirdness(event.target.value)} />
                        </Card>
                    :
                        <Card>Search for a new gif!</Card>
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
    ),
    updateWeirdness: PropTypes.func,
    weirdness: PropTypes.number
}

const mapStateToProps = ({ error, result, search }) => ({
	error: error.message,
    hasResult: result.url,
    weirdness: search.weirdness
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateWeirdness
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
