import {Component} from 'react';
import {IconButton} from '@material-ui/core';
import {Delete, PriorityHigh} from '@material-ui/icons';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    onMarkDone = () => {
        this.setState(({done}) => ({
            done: !done
        }));
    };

    onMarkImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }));
    };

    render() {
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' todo-list-item--done';
        }

        if (important) {
            classNames += ' todo-list-item--important';
        }

        return (
            <li className={classNames}>
                <span onClick={this.onMarkDone} className='todo-list-item__label'>{label}</span>
                <IconButton onClick={onDeleted} color='secondary' aria-label='delete'>
                    <Delete/>
                </IconButton>
                <IconButton onClick={this.onMarkImportant} color='primary' aria-label='important'>
                    <PriorityHigh/>
                </IconButton>
            </li>
        );
    }
}