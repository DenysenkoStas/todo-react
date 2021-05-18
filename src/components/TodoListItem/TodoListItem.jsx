import {IconButton} from '@material-ui/core';
import {Delete, PriorityHigh} from '@material-ui/icons';
import './TodoListItem.scss';

const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, important, done}) => {
    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' todo-list-item--done';
    }

    if (important) {
        classNames += ' todo-list-item--important';
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleDone} className='todo-list-item__label'>{label}</span>
            <IconButton onClick={onDeleted} color='secondary' aria-label='delete'>
                <Delete/>
            </IconButton>
            <IconButton onClick={onToggleImportant} color='primary' aria-label='important'>
                <PriorityHigh/>
            </IconButton>
        </li>
    );
};

export default TodoListItem;