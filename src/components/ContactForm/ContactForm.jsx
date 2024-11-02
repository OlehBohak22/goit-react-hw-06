import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const initialValues = { name: "", number: "" };

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.contactForm}>
        <div className={s.inputContainer}>
          <div className={s.labelContainer}>
            <label htmlFor={nameId}>Name</label>
            <Field
              id={nameId}
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="p" />
          </div>

          <div className={s.labelContainer}>
            <label htmlFor={numberId}>Number</label>
            <Field
              id={numberId}
              name="number"
              type="text"
              placeholder="Enter your number"
            />
            <ErrorMessage name="number" component="p" />
          </div>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
