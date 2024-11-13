

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import auth from '../../services/auth';
import Carousel from './Carousel';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const LoginRegister = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUpMode) {
        const response = await api.post('/auth/register', formData);
        if (response.status === 201) {
          toast.success('Registration successful. Please log in.');
          setIsSignUpMode(false);
        } else {
          toast.error(response.data.message || 'Registration failed. Please try again.');
        }
      } else {
        const response = await api.post('/auth/login', formData);
        if (response.status === 200) {
          auth.login(response.data.token);
          toast.success('Login successful');
          navigate('/');
          window.location.reload(); // Refresh the page
        } else {
          toast.error(response.data.message || 'Login failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Response:', error.response);
      toast.error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  const toggleForm = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div id="login-register-container" className={isSignUpMode ? 'sign-up-mode' : ''}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {isSignUpMode ? (
              <SignUpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} toggleForm={toggleForm} />
            ) : (
              <SignInForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} toggleForm={toggleForm} />
            )}
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;