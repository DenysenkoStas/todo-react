import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <TodoListItem key={id} {...itemProps}/>
        );
    });

    return (
        <ul className='todo-list'>
            {elements}
        </ul>
    );
};

export default TodoList;