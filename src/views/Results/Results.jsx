import React from 'react';
import { Button, Card, Gif } from '../../components';
import { connect } from 'react-redux';
import './Results.scss';

const ResultsView = ({ avgWeirdness, liked }) =>
    <Card className="results">
        <h2>You scored { avgWeirdness } out of 10 on the weirdness scale!</h2>

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
    </Card>

const mapStateToProps = ({ liked }) => ({
    liked,
    avgWeirdness: Math.round(liked.map((likedItem) => likedItem.weirdness).reduce((accumulator, num) => accumulator + num, 0) / liked.length)
});

export default connect(mapStateToProps)(ResultsView);
