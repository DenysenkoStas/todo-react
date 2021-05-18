import {Component} from 'react';
import {TextField} from '@material-ui/core';
import './SearchPanel.scss';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <TextField
                className='search-panel'
                label='Type to search'
                color='primary'
                variant='outlined'
                size='small'
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }
}