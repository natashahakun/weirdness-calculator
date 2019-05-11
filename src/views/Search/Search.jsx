import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button, Card, Liked, Result, Search, Slider } from '../../components';
import { WeirdnessLayout } from '../../layouts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setWeirdness } from '../../actions/search.actions';
import './Search.scss';

const SearchView = ({ hasResult, numLiked, setWeirdness, weirdness }) => 
    <div className="search-view">
        <WeirdnessLayout
            top={
                <Card>
                    <p>Find out how weird you are by selecting the GIFs that make you laugh. We’ll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
                    <p>When you find a GIF you like, press the Like button. Once you like 5 GIFs, we’ll show you how weird you are.</p>

                    <div className="search-view__search">
                        <Search />
                    </div>
                </Card>
            }
            bottom={
                hasResult ?
                    <Card>
                        <Result />

                        <Slider id="slider" label="Weirdness" value={weirdness} onChange={(event) => setWeirdness(event.target.value)} />
                    </Card>
                :
                    <Card>Search for a new gif!</Card>
            }
            panel={
                <Card>
                    <Liked />

                    { numLiked !== 0 &&
                        <div className="search-view__action">
                            <Link to="/results">
                                <Button disabled={numLiked < 5} onClick={() => {}} type="button">Calculate my weirdness score</Button>
                            </Link>

                            { numLiked < 5 &&
                                <p className="search-view__text">You must <i>Like</i> { 5 - numLiked } more GIF to calculate your score</p>
                            }
                        </div>
                    }
                </Card>
            }
        />
    </div>


SearchView.defaultProps = {
	hasResult: null
}

SearchView.propTypes = {
	hasResult: PropTypes.string || null,
	numLiked: PropTypes.number,
    setWeirdness: PropTypes.func,
    weirdness: PropTypes.number
}

const mapStateToProps = ({ liked, result, search }) => ({
    hasResult: result.url,
    numLiked: liked.length,
    weirdness: search.weirdness
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setWeirdness
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
