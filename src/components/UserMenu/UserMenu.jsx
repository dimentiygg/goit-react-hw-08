import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOps';
import { selectUser } from '../../redux/auth/authSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.navAuthContainer}>
      <p className={css.userText}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
