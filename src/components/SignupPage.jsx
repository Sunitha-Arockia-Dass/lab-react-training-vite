import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [strongPassword, setStrongPassword] = useState(true);
  const [greeting, setGreeting] = useState("");

  const isEmailValid = () => {
    return email.includes("@");
  };

  const isPasswordStrong = () => {
    return password.length >= 8;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const emailValid = isEmailValid();
    const passwordStrong = isPasswordStrong();
    setValidEmail(emailValid);
    setStrongPassword(passwordStrong);

    if (nationality === "en") {
      setGreeting("Hello");
    } else if (nationality === "de") {
      setGreeting("Hallo");
    } else if (nationality === "fr") {
      setGreeting("Bonjour");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${
              submitted && !validEmail ? "is-invalid" : ""
            }`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          {submitted && !validEmail && (
            <div className="invalid-feedback">Invalid email</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              submitted && !strongPassword ? "is-invalid" : ""
            }`}
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
          {submitted && !strongPassword && (
            <div className="invalid-feedback">Password is weak</div>
          )}
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value="">Nationality</option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {submitted && validEmail && strongPassword && (
        <p>
          {greeting}, Your email is {email}
        </p>
      )}
    </div>
  );
}

export default SignupPage;
