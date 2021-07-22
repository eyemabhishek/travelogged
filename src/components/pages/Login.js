import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {
  Typography,
  Link,
  Button,
  Grid,
  Paper,
  Avatar,
  TextField,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import HttpsSharpIcon from "@material-ui/icons/HttpsSharp";
const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 25,
    height: "75vh",
    width: 348,
    margin: "0px auto ",
  };
  const avtarStyle = { backgroundColor: "#3f50b5" };
  const btnStyle = { margin: "30px 0 " };
  const genStyle = { margin: "12px 0 " };
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
 
  const validationSchema = Yup.object().shape({

    username: Yup.string().email('Please enter a valid email').required("Required"),
    password: Yup.string().required("Required")
  })
  const onSubmit = (values, props) => {
   
    setTimeout(()=>{


      props.resetForm()
      props.setSubmitting(false)
    },2000)
   
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <HttpsSharpIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
         
              <Field
                as={TextField}
                name="username"
                label="Username"
                placeholder="enter username"
                fullWidth="true"
                style={genStyle}
                helperText={<ErrorMessage name="username"/>}
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                placeholder="enter password"
                fullWidth="true"
                style={genStyle}
                helperText={<ErrorMessage name="password"/>}

              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" style={genStyle} />}
                label="Remember me"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth="true"
                style={btnStyle}
                disabled={props.isSubmitting}
                
              >
            {props.isSubmitting? "loading": "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>

        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          Don't have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            {" "}
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
