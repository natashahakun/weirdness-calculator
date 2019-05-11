import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getResult } from '../../actions/result.actions'
import { setSearchTerm } from '../../actions/search.actions';
import './Search.scss';

const SearchSFC = ({ getResult, searchTerm, setSearchTerm }) => {
    const submitResult = event => {
        event.preventDefault();
        getResult();
    }

    return (
        <form onSubmit={submitResult} className="search">
            <Input label="Search term" id="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            <div className="search__action">
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
}  

SearchSFC.propTypes = {
    getResult: PropTypes.func,
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func
}

const mapStateToProps = ({ search }) => ({
    searchTerm: search.term
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getResult,
    setSearchTerm
}, dispatch);

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchSFC);