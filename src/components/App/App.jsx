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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return {
            id: this.maxId++, // generateId
            label: label,
            important: false,
            done: false
        };
    }

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
        const newItem = this.createTodoItem(text);

        // add element in array
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];

            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id);

        // update object
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        // construct new array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => ({
            todoData: this.toggleProperty(todoData, id, 'done')
        }));
    };

    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter(el => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className='top-panel'>
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}