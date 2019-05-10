import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Gif, Title } from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addLiked } from '../../actions/liked.actions';
import './Result.scss';

const ResultSFC = ({ addLiked, title, url }) =>
    <Card>
        <div className="result">
            <Title>Your result</Title>

            <Gif title={title} url={url} />

            <div className="result__action">
                <Button type="button" onClick={() => addLiked({ title, url })}>Like</Button>
            </div>
        </div>
    </Card>

ResultSFC.propTypes = {
    addLiked: PropTypes.func,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = ({ result }) => ({
    title: result.title,
    url: result.url
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addLiked
}, dispatch);

export const Result = connect(mapStateToProps, mapDispatchToProps)(ResultSFC);
