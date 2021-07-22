import React from "react";

import { Button, Grid, Paper, Avatar, TextField } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const paperStyle = {
  padding: 25,
  height: "75vh",
  width: 348,
  margin: "0px auto",
};
const avatarStyle = { backgroundColor: "#3f50b5" };
const btnStyle = { margin: "15px 0 " };
const SignUp = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    number: "",
    city: "",
    password: "",
    cpassword: "",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(3, "It's too short").required("Required"),
    lastname: Yup.string().min(3, "It's too short").required("Required"),
    city: Yup.string().required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    // gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
    number: Yup.number(),
    password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    cpassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
   

  })

  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <h2>Create account</h2>
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
                type="text"
                label="First name"
                placeholder="enter first name"
                fullWidth="true"
                name="firstname"
                helperText={<ErrorMessage name="firstname" />}
              />
              <Field
                as={TextField}
                type="text"
                label="Last name"
                placeholder="enter last name"
                fullWidth="true"
                name="lastname"
                helperText={<ErrorMessage name="lastname" />}

              />
              <TextField
                type="Number"
                label="Phone number (optional)"
                placeholder="enter phone number"
                fullWidth="true"
                name="number"
                helperText={<ErrorMessage name="number" />}

              />
              <Field
                as={TextField}
                type="text"
                label="City"
                placeholder="your city name"
                fullWidth="true"
                name="city"
                helperText={<ErrorMessage name="city" />}

              />
              <Field
                as={TextField}
                type="email"
                label="Email"
                placeholder="enter a valid email"
                fullWidth="true"
                name="email"
                helperText={<ErrorMessage name="email" />}

              />
              <Field
                as={TextField}
                type="password"
                label="Password"
                placeholder="enter password"
                fullWidth="true"
                name="password"
                helperText={<ErrorMessage name="password" />}

              />
              <Field
                as={TextField}
                type="password"
                label="Confirm password"
                placeholder="re-type password"
                fullWidth="true"
                name="cpassword"
                helperText={<ErrorMessage name="cpassword" />}

              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth="true"
                style={btnStyle}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "creating your account" : "Sign up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
