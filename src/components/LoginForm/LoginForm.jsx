import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const loginEmailId = nanoid();
  const loginEasswordId = nanoid();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={loginEmailId}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          name="email"
          id={loginEmailId}
          required
        />
        <label className={css.label} htmlFor={loginEasswordId}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={loginEasswordId}
          required
        />

        <button className={css.button} type="Submit">
          LogIn
        </button>
      </Form>
    </Formik>
  );
}
