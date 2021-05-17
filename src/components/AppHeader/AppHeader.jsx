import './AppHeader.scss';

const AppHeader = ({toDo, done}) => {
    return (
        <header className='app-header'>
            <h1 className='app-header__title'>Todo List</h1>
            <h2 className='app-header__info'>{toDo} more to do, {done} done</h2>
        </header>
    );
};

export default AppHeader;