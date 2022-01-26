import { NavLink } from "react-router-dom";

function NavBar(){
    return(<>
    <ul>
        <li> <NavLink to='task1-giphysearch'>Task1-Giphy Search</NavLink> </li>
        <li> <NavLink to='task2-todolist'>Task2-TodoList</NavLink> </li>
        <li> <NavLink to='task3-eightballs'>Task3-EightBalls</NavLink> </li>
    </ul>
    </>)
}
export default NavBar;