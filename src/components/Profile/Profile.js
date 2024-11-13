
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaLock, FaKey } from 'react-icons/fa';
import api from '../../services/api';
import "./profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: ''
  });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get('/profile');
      setProfile(response.data);
    } catch (error) {
      toast.error('Error fetching profile');
    }
  };

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      await api.put('/profile', profile);
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Error updating profile');
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    try {
      await api.put('/profile/password', passwords);
      setPasswords({ currentPassword: '', newPassword: '' });
      toast.success('Password updated successfully');
    } catch (error) {
      toast.error('Error updating password');
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-section">
          <h2><FaUser className="section-icon" /> Profile Information</h2>
          <form className="profile-form" onSubmit={updateProfile}>
            <div className="form-group">
              <label>
                <FaUser className="input-icon" />
                <span>Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>
                <FaEnvelope className="input-icon" />
                <span>Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="update-btn">
              Update Profile
            </button>
          </form>
        </div>

        <div className="profile-section">
          <h2 className='pasword-heading'><FaKey className="section-icon" /> Change Password</h2>
          <form className="profile-form" onSubmit={updatePassword}>
            <div className="form-group">
              <label>
                <FaLock className="input-icon" />
                <span>Current Password</span>
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
                placeholder="Enter current password"
              />
            </div>
            <div className="form-group">
              <label>
                <FaLock className="input-icon" />
                <span>New Password</span>
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
              />
            </div>
            <button type="submit" className="update-btn">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;