// import React from 'react';
// import Logo from './Logo';
// import InputField from './InputField';
// import './auth.css'

// const SignUpForm = ({ formData, handleChange, handleSubmit, toggleForm }) => (
//   <form className="sign-up-form" onSubmit={handleSubmit}>
//     <Logo />
//     <div className="heading">
//       <h2>Get Started</h2>
//       <h6>Already have an account?</h6>
//       <a href="#/signIn" className="toggle" onClick={toggleForm}>
//         Sign in
//       </a>
//     </div>
//     <div className="actual-form">
//       <InputField
//         type="text"
//         name="name"
//         minLength="4"
//         label="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <InputField
//         type="email"
//         name="email"
//         label="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <InputField
//         type="password"
//         name="password"
//         minLength="4"
//         label="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <input type="submit" value="Sign Up" className="sign-btn" />
//       <p className="text">
//         By signing up, I agree to the
//         <a href="#">Terms of Services</a> and
//         <a href="#">Privacy Policy</a>
//       </p>
//     </div>
//   </form>
// );

// export default SignUpForm;
import React from 'react';
import Logo from './Logo';
import InputField from './InputField';
import './auth.css'

const SignUpForm = ({ formData, handleChange, handleSubmit, toggleForm }) => (
  <form className="sign-up-form" onSubmit={handleSubmit}>
    <Logo />
    <div className="heading">
      <h2>Get Started</h2>
      <h6>Already have an account?</h6>
      <button className="toggle" onClick={toggleForm}>
        Sign in
      </button>
    </div>
    <div className="actual-form">
      <InputField
        type="text"
        name="name"
        minLength="4"
        label="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        type="email"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        minLength="4"
        label="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign Up" className="sign-btn" />
      <p className="text">
        By signing up, I agree to the
        <button className="link-button">Terms of Services</button> and
        <button className="link-button">Privacy Policy</button>
      </p>
    </div>
  </form>
);

export default SignUpForm;