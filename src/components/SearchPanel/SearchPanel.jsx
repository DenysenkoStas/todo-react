import {TextField} from '@material-ui/core';
import './SearchPanel.scss';

const SearchPanel = () => {
    return (
        <TextField
            className='search-panel'
            label='Type to search'
            color='primary'
            variant='outlined'
            size='small'
        />
    );
};

export default SearchPanel;