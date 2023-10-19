import { useFormik } from "formik";
import * as Yup from 'yup';
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Esquema de validación con YUP
const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string().email('Email no válido').required('El email es requerido'),
  password: Yup.string().min(8, 'La contraseña debe tener 8 caracteres como mínimo').required('La contraseña es requerida')
});


const App = () => {

  //Lo que necesita el formulario
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

  //La validación la hacemos con Yup
    validationSchema: validationSchema,
  
  //Lo que pasa cuando se envía el formulario, en este caso, una alerta.
  onSubmit: (values) => {
    alert(JSON.stringify(values,null,2));
    //console.log("Valores del formulario:", values); //<-- Si queremos mostrarlo en consola
  },

  });


  return (
    <Container className="d-flex justify-content-center align-items-center">

      <div className="border rounded-3 p-5 mt-5">
      <h1>Formulario de registro</h1>
      <h5 className="text-center">con Formik y Yup</h5>

      <form onSubmit={formik.handleSubmit}>

        {/* Nombre */}
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          />
            
          {formik.touched.name && formik.errors.name ? (
          <div className="text-danger">{formik.errors.name}</div>
          ) : null}

        </div>



        {/* Email */}
        <div className="mb-3">

          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}

        </div>



      {/* Contraseña */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-warning px-5">
            Enviar
          </button>
        </div>

     

    </form>
  </div>
  </Container>
);
};

    
    
export default App;