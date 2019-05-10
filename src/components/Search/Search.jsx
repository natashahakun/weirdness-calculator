import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getResult } from '../../actions/result.actions'
import './Search.scss';

class SearchClass extends React.Component {
    state = {
        searchTerm: ''
    }

    render() {
        return (
            <form onSubmit={this.submitResult} className="search">
                <Input label="Search term" id="search" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
                <div className="search__action">
                    <Button type="submit">Search</Button>
                </div>
            </form>
        )
    }

    submitResult = event => {
        event.preventDefault()
        this.props.getResult(this.state.searchTerm)
    }
}  

SearchClass.propTypes = {
    getResult: PropTypes.func
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getResult
}, dispatch);

export const Search = connect(null, mapDispatchToProps)(SearchClass);