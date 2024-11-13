// import React from 'react';
// import Logo from './Logo';
// import InputField from './InputField';
// import './auth.css'

// const SignInForm = ({ formData, handleChange, handleSubmit, toggleForm }) => (
//   <form className="sign-in-form" onSubmit={handleSubmit}>
//     <Logo />
//     <div className="heading">
//       <h2>Welcome Back</h2>
//       <h6>Not registered yet?</h6>
//       <a href="#/signUp" className="toggle" onClick={toggleForm}>
//         Sign up
//       </a>
//     </div>
//     <div className="actual-form">
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
//       <input type="submit" value="Sign In" className="sign-btn" />
//       <p className="text">
//         Forgotten your password or your login details?
//         <a href="#">Get help</a> signing in
//       </p>
//     </div>
//   </form>
// );

// export default SignInForm;
import React from 'react';
import Logo from './Logo';
import InputField from './InputField';
import './auth.css'

const SignInForm = ({ formData, handleChange, handleSubmit, toggleForm }) => (
  <form className="sign-in-form" onSubmit={handleSubmit}>
    <Logo />
    <div className="heading">
      <h2>Welcome Back</h2>
      <h6>Not registered yet?</h6>
      <button className="toggle" onClick={toggleForm}>
        Sign up
      </button>
    </div>
    <div className="actual-form">
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
      <input type="submit" value="Sign In" className="sign-btn" />
      <p className="text">
        Forgotten your password or your login details?
        <button className="link-button">Get help signing in</button>
      </p>
    </div>
  </form>
);

export default SignInForm;