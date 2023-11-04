// DoctorCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function DoctorCard({ doctor }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {doctor.name}
        </Typography>
        <Typography color="text.secondary">{doctor.specialty}</Typography>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;
