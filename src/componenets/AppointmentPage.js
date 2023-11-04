import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AppointmentPage.css';
import { auth } from '../componenets/Base'; // Adjust the import path
import { useNavigate } from 'react-router-dom';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

// Your styles...

const styles = StyleSheet.create({
  // Your styles...
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 5,
    marginTop: 80, // 30 units of space around the section
    padding: 20, // 20 units of space inside the section
    flexGrow: 1, // Flex factor, usually set to 1 for equal distribution
    columnGap: 4, // 4 units of gap between columns
    fontSize: 13, // Font size in pixels (no 'px' needed)
  },
  heading: {
    fontSize: 20, // You can adjust the font size as needed
    fontWeight: 'bold', // Make it bold if desired
    position: 'absolute',
    top: -40,
    left: 20,
    // Add some space below the heading
  },
});

function AppointmentPage() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [doctorname, setdoctorname] = useState('');

  const generatePDF = () => {
    // Create a PDF document...
    const pdfDoc = (
      <Document>
        <Page size="A7" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Appointment Slip</Text>
            <Text>Name: {name}</Text>
            <Text>DoctorName: {doctorname}</Text>
            <Text>Email: {email}</Text>
            <Text>Appointment Date: {date}</Text>
          </View>
        </Page>
      </Document>
    );
    // Return the PDF document
    return pdfDoc;
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigate('/login'); // Navigate to the sign-in page after logout.
      })
      .catch((error) => {
        console.error('Logout error: ', error);
      });
  };

  const handleBookAppointment = () => {
    // Perform any necessary logic to book the appointment here.

    // Clear the form fields
    setName('');
    setEmail('');
    setDate('');
    setdoctorname('');
  };

  const handleDownloadPDF = () => {
    const pdfBlob = new Blob([generatePDF()], { type: 'application/pdf' });

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = URL.createObjectURL(pdfBlob);
    a.download = 'appointment.pdf';

    // Trigger a click event on the anchor to initiate the download
    
  };

  useEffect(() => {
    // Automatically trigger the download when the page loads
    handleDownloadPDF();
  }, []);
  const handleCombinedActions = () => {
    // Call both action functions
    handleBookAppointment();
    handleDownloadPDF();
  };

  return (
    <div className="appointment-page">
      <button className='logout' onClick={handleLogout}>Logout</button>
      <h2 className='heading'>Book an Appointment</h2>
      {/* Display the doctor's ID */}
      <div className="form-container">
        <div className="form-section">
          <label className="form-label">Patient Name:</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Doctor Name:</label>
          <input
            type="text"
            className="form-input"
            value={doctorname}
            onChange={(e) => setdoctorname(e.target.value)}
          />

          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="form-label">Appointment Date:</label>
          <input
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
           <div className="form-section">
          {/* Use PDFDownloadLink and apply the custom style */}
          <PDFDownloadLink document={generatePDF()} fileName="appointment.pdf">
            {({ blob, url, loading, error }) => (
              <button
                className="downloadButton"
                onClick={handleCombinedActions}
                
              >
                
                Download PDF
              </button>
            )}
          </PDFDownloadLink>
        </div>
        </div>
       
      </div>
      </div>
    
  );
}

export default AppointmentPage;












