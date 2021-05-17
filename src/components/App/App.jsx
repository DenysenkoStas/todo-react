import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoList from '../TodoList/TodoList';
import './App.scss';

const App = () => {
    const todoData = [
        {id: 1, label: 'Drink Coffee', important: false},
        {id: 2, label: 'Make Awesome App', important: true},
        {id: 3, label: 'Have a lunch', important: false}
    ];

    return (
        <div className='todo-app'>
            <AppHeader toDo={1} done={3}/>
            <div className='top-panel'>
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;