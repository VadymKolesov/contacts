import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Log in</h2>
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" className={css.input} />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              className={css.input}
            />
          </li>
        </ul>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
