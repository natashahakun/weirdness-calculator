import React from 'react';
import PropTypes from 'prop-types';
import { Card, Gif, Title } from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeLiked } from '../../actions/liked.actions';
import './Liked.scss';

const LikedSFC = ({ liked, removeLiked }) =>
    <Card>
        <div className="liked">
            <Title>Your liked gifs</Title>

            <div className="liked__gifs">{ liked.map((liked) => {
                return (
                    <div key={liked.url}>
                        <Gif removeFunc={() => removeLiked(liked)} title={liked.title} url={liked.url} />
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
    ),
    removeLiked: PropTypes.func
}

const mapStateToProps = ({ liked }) => ({
    liked
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    removeLiked
}, dispatch);

export const Liked = connect(mapStateToProps, mapDispatchToProps)(LikedSFC);
