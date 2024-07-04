import React from 'react';
import { Typography, Paper } from '@mui/material';
import './ProfileDisplay.css';

const ProfileDisplay = ({ profile }) => {
  return (
    <Paper className="profile-display">
      <Typography variant="h5" gutterBottom>
        Display Profile
      </Typography>
      <Typography variant="body1">First Name: {profile.firstName}</Typography>
      <Typography variant="body1">Middle Name: {profile.middleName}</Typography>
      <Typography variant="body1">Last Name: {profile.lastName}</Typography>
      <Typography variant="body1">Primary Phone: {profile.primaryPhone}</Typography>
      <Typography variant="body1">Primary Email: {profile.primaryEmail}</Typography>
      <Typography variant="body1">Home Address: {profile.homeAddress}</Typography>
      <Typography variant="body1">Office Address: {profile.officeAddress}</Typography>
      <Typography variant="body1">Facebook Profile: {profile.facebookProfile}</Typography>
      <Typography variant="body1">LinkedIn Profile: {profile.linkedinProfile}</Typography>
    </Paper>
  );
};

export default ProfileDisplay;
