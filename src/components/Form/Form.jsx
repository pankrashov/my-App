import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';


const validation = yup.object().shape({
  showInput: yup.string(),
  title: yup.string()
  .required('Preferred contact is required.'),
  tel: yup.string()
  .when('showInput', {
    is: "Tel",
    then: yup.string().required(),
    otherwise: yup.string()
  }),
  email: yup.string()
  .when('showInput', {
    is: "Email",
    then: yup.string().required(),
    otherwise: yup.string()
  }),
})

const objFormik = {
  title: '',
  tel: '',
  email: '',
  showInput: 'Email',
}

const AddItemForm = ({toggle, addItem}) => {
  return (
    <div className="form">
    <Formik
      initialValues={objFormik}
      validationSchema={validation}
      onSubmit={(values) => {
        const title = values.title
        const tel = values.tel
        const email = values.email
        const id = 'length'
        addItem(title, tel, email, id)
        toggle();
      }}
    >
      {({ values, errors, touched  }) => {
        return (
          <Form>
          <label className="label">First Name
            <Field 
              className="input" 
              id="title" 
              name="title" 
              placeholder="Jane" />
            <ErrorMessage  name="title">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </label>
          <div className="group" aria-labelledby="my-radio-group">
              <label className="label">
                <Field 
                  type="radio" 
                  name="showInput" 
                  value="Email" 
                  checked="checked"/>
                Email
              </label>
              <label className="label">
                <Field 
                  type="radio" 
                  name="showInput" 
                  value="Tel" />
                Tel
              </label>
          </div>
          {values.showInput === 'Tel' ?
            <label className="label">Tel
              <Field 
                className="input" 
                id="tel" 
                name="tel" 
                placeholder="tel" />
              <ErrorMessage  name="tel">{msg => <div className="error">{msg}</div>}</ErrorMessage>
            </label>
            :
            <label className="label">Email
                <Field
                className="input"
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
              <ErrorMessage  name="email">{msg => <div className="error">{msg}</div>}</ErrorMessage>
            </label>
          }
          <div><button className="btn" type="submit">Submit</button></div>
        </Form>
        )
      }}
    </Formik>
  </div>
  );
}

export {AddItemForm}