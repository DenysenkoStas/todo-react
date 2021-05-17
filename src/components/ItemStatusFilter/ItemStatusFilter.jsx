import {ButtonGroup, Button} from '@material-ui/core';
import './ItemStatusFilter.scss';

const ItemStatusFilter = () => {
    return (
        <ButtonGroup className='item-status-filter' color='primary' variant='outlined'>
            <Button variant='contained'>All</Button>
            <Button>Active</Button>
            <Button>Done</Button>
        </ButtonGroup>
    );
};

export default ItemStatusFilter;
