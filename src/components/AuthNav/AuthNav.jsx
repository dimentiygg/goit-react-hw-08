import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

export default function AuthNav() {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <ul className={css.authNavList}>
      <li>
        <NavLink className={(css.link, activeLink)} to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink className={(css.link, activeLink)} to="/login">
          Log In
        </NavLink>
      </li>
    </ul>
  );
}
