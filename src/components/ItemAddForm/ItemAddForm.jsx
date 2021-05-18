import {Component} from 'react';
import {Button, TextField} from '@material-ui/core';
import './ItemAddForm.scss';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className='item-add-form' onSubmit={this.onSubmit}>
                <TextField
                    onChange={this.onLabelChange}
                    className='item-add-form__input'
                    label='What needs to be done?'
                    color='primary'
                    variant='outlined'
                    size='small'
                    value={this.state.label}
                />
                <Button type='submit' color='primary' variant='contained'>Add</Button>
            </form>
        );
    }
}