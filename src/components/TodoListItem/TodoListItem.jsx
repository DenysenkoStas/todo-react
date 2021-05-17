import {IconButton} from '@material-ui/core';
import {Delete, PriorityHigh} from '@material-ui/icons';
import './TodoListItem.scss';

const TodoListItem = ({label, important = false}) => {
    return (
        <li className={`todo-list-item${important ? ' todo-list-item--important' : ''}`}>
            <span className='todo-list-item__label'>{label}</span>
            <IconButton color='secondary' aria-label='delete'>
                <Delete/>
            </IconButton>
            <IconButton color='primary' aria-label='important'>
                <PriorityHigh/>
            </IconButton>
        </li>
    );
};

export default TodoListItem;