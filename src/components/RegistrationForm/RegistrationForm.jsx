import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameId}
          required
        />
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          name="email"
          id={emailId}
          required
        />
        <label className={css.label} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordId}
          required
        />

        <button className={css.button} type="Submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
