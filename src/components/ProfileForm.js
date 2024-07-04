import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';

const ProfileForm = ({ onSubmit }) => {
  const [profile, setProfile] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    primaryPhone: '',
    primaryEmail: '',
    homeAddress: '',
    officeAddress: '',
    facebookProfile: '',
    linkedinProfile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Person Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="First Name"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Middle Name"
            name="middleName"
            value={profile.middleName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Last Name"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Primary Phone"
            name="primaryPhone"
            value={profile.primaryPhone}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Primary Email"
            name="primaryEmail"
            value={profile.primaryEmail}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Home Address"
            name="homeAddress"
            value={profile.homeAddress}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Office Address"
            name="officeAddress"
            value={profile.officeAddress}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Facebook Profile"
            name="facebookProfile"
            value={profile.facebookProfile}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="LinkedIn Profile"
            name="linkedinProfile"
            value={profile.linkedinProfile}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Profile
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfileForm;
