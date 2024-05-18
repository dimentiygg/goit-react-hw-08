import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth//selectors';

export default function Navigation() {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink to="/contacts" className={activeLink}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
