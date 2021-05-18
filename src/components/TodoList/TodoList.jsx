import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onDeleted}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <TodoListItem
                key={id}
                {...itemProps}
                onDeleted={() => onDeleted(id)}
            />
        );
    });

    return (
        <ul className='todo-list'>
            {elements}
        </ul>
    );
};

export default TodoList;