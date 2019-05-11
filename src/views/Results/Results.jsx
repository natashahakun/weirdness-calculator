import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Gif } from '../../components';
import { connect } from 'react-redux';
import './Results.scss';

const ResultsView = ({ avgWeirdness, liked }) =>
    <Card className="results">
        { liked.length > 0 ?
            <div className="results-wrapper">
                <h2 className="results__heading">You scored { avgWeirdness } out of 10 on the weirdness scale!</h2>

                <div className="results__main">
                    <h3>The GIFs you liked</h3>

                    <div className="results__gifs">{ liked.map((liked) => {
                    return (
                        <div className="results__gif" key={liked.url}>
                            <Gif showWeirdness {...liked} />
                        </div>
                    )
                })}</div>
                </div>

                <div className="results__action">
                    <Button>Start over</Button>
                </div>
            </div>
            :
            <div className="results-not-found">
                <p>No Results found</p>
                <Link to="/">Start Over</Link>
            </div>
        }
    </Card>

const mapStateToProps = ({ liked }) => ({
    liked,
    avgWeirdness: Math.round(liked.map((likedItem) => likedItem.weirdness).reduce((accumulator, num) => accumulator + num, 0) / liked.length)
});

export default connect(mapStateToProps)(ResultsView);
