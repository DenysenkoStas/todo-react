import {Component} from 'react';
import {ButtonGroup, Button} from '@material-ui/core';
import './ItemStatusFilter.scss';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <ButtonGroup className='item-status-filter' color='primary' variant='outlined'>
                <Button variant='contained'>All</Button>
                <Button>Active</Button>
                <Button>Done</Button>
            </ButtonGroup>
        );
    }
}