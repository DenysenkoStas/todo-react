import {Component} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm';
import './App.scss';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            {id: 1, label: 'Drink Coffee', important: false},
            {id: 2, label: 'Make Awesome App', important: true},
            {id: 3, label: 'Have a lunch', important: false}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        // generateId
        const newItem = {
            id: this.maxId++,
            label: text,
            important: false
        };

        // add element in array
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        const {todoData} = this.state;

        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3}/>
                <div className='top-panel'>
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={todoData} onDeleted={this.deleteItem}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}