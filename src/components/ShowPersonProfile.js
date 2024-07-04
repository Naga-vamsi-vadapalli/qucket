import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileDisplay from './ProfileDisplay';
import { Paper, Button } from '@mui/material';
import './ShowPersonProfile.css';

const ShowPersonProfile = () => {
  const [profile, setProfile] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const handleFormSubmit = (profileData) => {
    setProfile(profileData);
    setShowProfile(true);
  };

  const toggleProfileDisplay = () => {
    setShowProfile(!showProfile);
  };

  return (
    <Paper className="profile-container">
      {!showProfile && <ProfileForm onSubmit={handleFormSubmit} />}
      {showProfile && (
        <>
          <Button onClick={toggleProfileDisplay} variant="contained" color="secondary" className="toggle-button">
            {showProfile ? 'Hide Profile' : 'Show Profile'}
          </Button>
          {profile && showProfile && <ProfileDisplay profile={profile} />}
        </>
      )}
    </Paper>
  );
};

export default ShowPersonProfile;
