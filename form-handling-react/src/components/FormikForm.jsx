import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("اسم المستخدم مطلوب"),
  email: Yup.string()
    .email("بريد غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: Yup.string()
    .min(6, "كلمة المرور قصيرة")
    .required("كلمة المرور مطلوبة")
});

function FormikForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("User Registered with Formik:", values);
      }}
    >
      <Form>
        <h2>Register (Formik)</h2>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
