import React from "react";
import ReactDOM from 'react-dom';


const TodoList = () => {
  return (
    <ul>
      <li>Дело 1</li>
      <li>Дело 2</li>
      <li>Дело 3</li>
    </ul>
  );
};


const AppHeader = () => {
  return <h1>Заголовок</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />
};

const App = () => {
  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};


ReactDOM.render(<App />, 
  document.getElementById('root'));