import {Component} from 'react';
import {ButtonGroup, Button} from '@material-ui/core';
import './ItemStatusFilter.scss';

export default class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const variant = isActive && 'contained';
            return (
                <Button
                    key={name}
                    variant={variant}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </Button>
            );
        });

        return (
            <ButtonGroup className='item-status-filter' color='primary' variant='outlined'>
                {buttons}
            </ButtonGroup>
        );
    }
}