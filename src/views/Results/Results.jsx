import React from 'react';
import { Button, Gif } from '../../components';
import { connect } from 'react-redux';
import './Results.scss';

const ResultsView = ({ liked }) =>
    <div className="results">
        <h2>You scored X out of 10 on the weirdness scale!</h2>

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

        <Button>Start over</Button>
    </div>

const mapStateToProps = ({ liked }) => ({
    liked
});

export default connect(mapStateToProps)(ResultsView);
