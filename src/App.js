import './App.css';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@material-ui/core';
import ImageDropzone from './ImageDropzone';
import axios from 'axios';

function App() {
  const initialValues = {
    title: '',
    price: '',
    description: '',
    images: [],
  };

  const onSubmit = (values, actions) => {
    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('price', values.price);
    formData.append('description', values.description);
    formData.append('images', values.images);

    // Вот тут снизу будет ваш запрос!

    // axios.post(URL, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    actions.resetForm();
  };

  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ values, setFieldValue, setFieldTouched }) => (
          <>
            <Form className="form">
              <label>Title</label>
              <Field
                className="formInput"
                name="title"
                variant="outlined"
                placeholder="Title"
                as={TextField}
              />
              <label>Price</label>
              <Field
                className="formInput"
                name="price"
                placeholder="Price"
                variant="outlined"
                as={TextField}
              />
              <label>Description</label>
              <Field
                className="formInput"
                name="description"
                placeholder="Description"
                multiline
                rows={8}
                variant="outlined"
                as={TextField}
              />

              <ImageDropzone
                buttonText={'Загрузить'}
                setFieldValue={setFieldValue}
                name="images"
                formikImages={values.images}
              />
            </Form>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </>
        )}
      </Formik>
    </div>
  );
}

export default App;
