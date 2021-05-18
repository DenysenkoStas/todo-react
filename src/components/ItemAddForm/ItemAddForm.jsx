import {Component} from 'react';
import {Button, TextField} from '@material-ui/core';
import './ItemAddForm.scss';

export default class ItemAddForm extends Component {
    render() {
        const {onItemAdded} = this.props;

        return (
            <div className='item-add-form'>
                <TextField
                    className='item-add-form__input'
                    label='What needs to be done?'
                    color='primary'
                    variant='outlined'
                    size='small'
                />
                <Button onClick={() => onItemAdded('New list item')} color='primary' variant='contained'>Add</Button>
            </div>
        );
    }
}