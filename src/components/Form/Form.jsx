import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { addItem } from '../../redux/dataReducer';
import { connect } from "react-redux";

const AddItemForm = (props) => {
  const length = props.tablesData.length +1;

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

  return (
    <div className="form">
    <Formik
      initialValues={{
        title: '',
        tel: '',
        email: '',
        showInput: 'Email',
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        console.log('onSubmit');
        const title = values.title
        const tel = values.tel
        const email = values.email
        const id = length
        props.addItem(title, tel, email, id)
        props.setEditMode(false);
      }}
    >
      {({ values, errors, touched  }) => {
          const notAllowed = () => {
            let notAlloweds = 'not-allowed'
            if (!errors.title & !errors.email & values.showInput === 'Email' || !errors.title & !errors.tel & values.showInput === 'Tel') {
              notAlloweds = 'active';
            }
            return notAlloweds
          }
        return (
          <Form>
          <label className="label">First Name
          <Field className="input" id="title" name="title" placeholder="Jane" />
          <ErrorMessage  name="title">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </label>
          <div className="group" aria-labelledby="my-radio-group">
              <label className="label">
                <Field type="radio" name="showInput" value="Email" checked="checked"/>
                Email
              </label>
              <label className="label">
                <Field type="radio" name="showInput" value="Tel" />
                Tel
              </label>
          </div>
          {values.showInput === 'Tel' ?
          <label className="label">Tel
          <Field className="input" id="tel" name="tel" placeholder="tel" />
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
          <div className={notAllowed()}><button className="btn" type="submit">Submit</button></div>
          {/* {!errors.title && !errors.email && values.showInput === 'Email' ? (
             <button className="btn em" type="submit">Submit</button>
           ) : <div className="not-allowed"><button className="btn em" type="submit">Submit</button></div>}
          {!errors.title && !errors.tel && values.showInput === 'Tel' ? (
             <button className="btn tel" type="submit">Submit</button>
           ) : <div className="not-allowed"><button className="btn tel" type="submit">Submit</button></div>} */}
        </Form>
        )
      }}
    </Formik>
  </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tablesData: state.dataDable.tablesData
  };
};
export default connect(mapStateToProps, {addItem})(AddItemForm);