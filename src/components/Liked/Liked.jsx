import React from 'react';
import PropTypes from 'prop-types';
import { Card, Gif, Title } from '../../components';
import { connect } from 'react-redux';
import './Liked.scss';

const LikedSFC = ({ liked, removeLiked }) =>
    <Card>
        <div className="liked">
            <Title>Your liked gifs</Title>

            <div className="liked__gifs">{ liked.map((liked) => {
                return (
                    <div key={liked.url}>
                        <Gif title={liked.title} url={liked.url} />
                    </div>
                )
             } ) }</div>
        </div>
    </Card>

LikedSFC.propTypes = {
    liked: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
        })
    )
}

const mapStateToProps = ({ liked }) => ({
    liked
});

export const Liked = connect(mapStateToProps)(LikedSFC);
