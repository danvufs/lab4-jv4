import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

function MainMenu() {
  return (
    <nav className='navigationBar'>
      <NavLink className='tab' to="/">Tasks</NavLink>
      <NavLink className='tab' to="/help">Help</NavLink>
    </nav>
  );
}

export default MainMenu;
