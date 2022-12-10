import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const logWithEmailAndPassword = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action="" onSubmit={logWithEmailAndPassword}>
        <label htmlFor="">Display Your Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={changeHandler}
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          required
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
