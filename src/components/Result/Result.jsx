import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Gif, Title } from '../../components';
import { connect } from 'react-redux';
import './Result.scss';

const ResultSFC = ({ title, url }) =>
    <Card>
        <div className="result">
            <Title>Your result</Title>

            <Gif title={title} url={url} />

            <div className="result__action">
                <Button type="button" onClick={() => {}}>Like</Button>
            </div>
        </div>
    </Card>

ResultSFC.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = ({ result }) => ({
    title: result.title,
    url: result.url
});

export const Result = connect(mapStateToProps)(ResultSFC);
