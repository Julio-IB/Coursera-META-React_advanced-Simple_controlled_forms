import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [formIsValid, setFormIsValid] = useState(false);

  const getIsFormValid = () => {
    // Implement this function
    let validation = [
      firstName.length > 0,
      !!validateEmail(email),
      password.value.length > 7,
      role == 'individual' || role == 'business'
    ];
    setFormIsValid(validation.every(Boolean));
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({value: "", isTouched: false});
    setRole("role");
    setFormIsValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} onChange={getIsFormValid}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input onChange={e => setFirstName(e.target.value)} placeholder="First name" value={firstName}/>
          </div>
          <div className="Field">
            <label>Last name</label>
            <input onChange={e => setLastName(e.target.value)} placeholder="Last name" value={lastName}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email address" value={email}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" onChange={e => setPassword({ value: e.target.value, isTouched: true })} placeholder="Password" value={password.value}/>
            {(password.isTouched && password.value.length < 8) && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={e => setRole(e.target.value)} value={role}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!formIsValid}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
