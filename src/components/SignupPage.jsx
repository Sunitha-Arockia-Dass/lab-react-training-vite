import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nationality, setNationality] = useState();
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const handleNationalityChange = (e) => {
    const nationalityValue = e.target.value;
    setNationality(nationalityValue);
  };

  const renderGreeting = () => {
    if (nationality === "en") {
      return "Hello";
    } else if (nationality === "de") {
      return "Hallo";
    } else if (nationality === "fr") {
      return "Bonjour";
    } else {
      return "";
    }
  };

  const isEmailValid = (email) => {
    // Add your email validation logic here
    // For example, a simple validation to check if it contains '@'
    return email.includes("@");
  };

  return (
    <div className="signup">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${isEmailValid(email) ? "is-valid" : "is-invalid"}`}
            id="exampleInputEmail1"
            value={email}
            onChange={handleEmailChange}
          />
          {/* <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${isPasswordStrong(password) ? "is-valid" : "is-invalid"}`}
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-3">

        <select className="form-select" aria-label="Default select example"  value={nationality} onChange={handleNationalityChange}>
          <option selected>Nationality</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        </div>
        <button type="submit"  className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        {renderGreeting()}, Your email is {email}
      </p>
    </div>
  );
}

export default SignupPage;
