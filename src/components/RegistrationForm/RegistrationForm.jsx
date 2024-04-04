import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Registration</h2>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" className={css.input} />
          </li>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
