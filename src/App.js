import './App.css';
import React from 'react';
import GiphySearch from './task1/GiphySearch';
import TodoList from './task2/TodoList';
import EightBall from './task3/EightBall';
import NavBar from './NavBar';
import { Routes , Route } from 'react-router-dom';

function App(){  

  return(

    <div className="container">
      <NavBar></NavBar>
      <br/>
      <Routes>
        <Route path = 'task1-giphysearch' element={<GiphySearch />}></Route>
        <Route path = 'task2-todolist' element={<TodoList/>}></Route>
        <Route path = 'task3-eightballs' element={<EightBall/>}></Route>
      </Routes>
     
    </div>

   );
}

export default App;