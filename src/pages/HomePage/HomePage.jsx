import { IoHome } from 'react-icons/io5';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>
        Welcome contacts HomePage <IoHome />
      </h1>
    </div>
  );
}
