import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink
        to='/'
        className={ ({ isActive }) => (isActive ? 'menu__item menu__item-active' : 'menu__item') }
      >
        ГЛАВНАЯ
      </NavLink>
      <NavLink
        to='/drift'
        className={ ({ isActive }) => (isActive ? 'menu__item menu__item-active' : 'menu__item') }
      >
        ДРИФТ-ТАКСИ
      </NavLink>
      <NavLink
        to='/timeattack'
        className={ ({ isActive }) => (isActive ? 'menu__item menu__item-active' : 'menu__item') }
      >
        TIME-ATTACK
      </NavLink>
      <NavLink
        to='/forza'
        className={ ({ isActive }) => (isActive ? 'menu__item menu__item-active' : 'menu__item') }
      >
        FORZA KARTING
      </NavLink>
    </nav>
  );
}
