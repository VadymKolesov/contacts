import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

let schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too Long")
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          values = { name: values.name, number: values.number };
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <Field className={css.input} id="name" name="name" />
                {errors.name && touched.name ? (
                  <p className={css.error}>{errors.name}</p>
                ) : null}
              </li>
              <li>
                <label htmlFor="number">Number</label>
                <Field className={css.input} id="number" name="number" />
                {errors.number && touched.number ? (
                  <p className={css.error}>{errors.number}</p>
                ) : null}
              </li>
            </ul>
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
