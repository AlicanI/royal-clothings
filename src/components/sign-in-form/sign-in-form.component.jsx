import { useState } from "react";
import { Button, FormInput } from "../../export/exporter";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const logWithEmailAndPassword = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong Password");
      } else if (error.code === "auth/user-not-found") {
        alert("User not found");
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sing with your email and password</span>
      <form onSubmit={logWithEmailAndPassword}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          required
        />
      </form>
      <div className="buttons-container">
        <Button onClick={logWithEmailAndPassword}>SIGN IN</Button>
        <Button type="button" onClick={logGoogleUser} buttonType="google">
          SIGN IN WITH GOOGLE ACCOUNT
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
