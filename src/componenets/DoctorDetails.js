// Import or define the 'doctors' array
import React from 'react';
import { useParams } from 'react-router-dom';
import image from '../componenets/images/1dc80917083a6bf2247c3f9b723ef03c-removebg-preview.png';
import image1 from '../componenets/images/e53e8760a712ca7f9753944e270cc2df-removebg-preview.png';
import image2 from '../componenets/images/Stethoscope_Smiling_Handsome_Male_Doctor_PNG-removebg-preview.png';
import image3 from '../componenets/images/1b0a41cf2132a34bf05a9b4dee30c1a6-removebg-preview.png';
import image4 from '../componenets/images/969f93cde7a93cebc4f3a9c80abaab2c-removebg-preview.png';
import image5 from '../componenets/images/28b183599b55d67d8bfc120bd294c80c-removebg-preview.png';


import './DoctorDetails.css';
import { Link } from 'react-router-dom';

// Define the 'doctors' array (if not imported)
const doctors = [
    {
        id: 1,
        name: 'Dr. Ayesha',
        specialty: 'Cardiologist',
        image: image, // Replace with the actual image URL or file path
      },
      {
        id: 2,
        name: 'Dr.Imran',
        specialty: 'Cardiologist',
        image: image4, // Replace with the actual image URL or file path
      },
      {
        id: 3,
        name: 'Dr. Khaliq',
        specialty: 'Cardiologist',
        image: image2, // Replace with the actual image URL or file path
      },
      {
        id: 4,
        name: 'Dr.Naveer',
        specialty: 'Dermatologist',
        image: image5, // Replace with the actual image URL or file path
      },
      {
        id: 5,
        name: 'Dr.Maryam',
        specialty: 'Dermatologist',
        image: image1, // Replace with the actual image URL or file path
      },
      {
        id: 6,
        name: 'Dr.Nazeer',
        specialty: 'Dermatologist',
        image: image3, // Replace with the actual image URL or file path
      },
      // Add image information for other doctors as well
    ];
    function DoctorDetails() {
      const { id } = useParams();
    
      let doctor = doctors.find((doc) => doc.id === parseInt(id));
    
      if (!doctor) {
        return <div>Doctor not found</div>;
      }
    
      return (
        <div className="DoctorDetails">
          <Link to="/doctor-dashboard" className="back-button">
             Back to Doctor Dashboard
          </Link>
          <div className="details">
            <h2>{doctor.name}</h2>
            <p>Specialty: {doctor.specialty}</p>
            <img src={doctor.image} alt={doctor.name} height={300} className='detailsimg' />
            <h3>Timings: 8pm to 10pm</h3>
            <h4>Rating ⭐️⭐️⭐️⭐️⭐️</h4>
            <Link to={`/book-appointment/${doctor.id}`} className="button2">
              Book your Appointment
            </Link>
          </div>
        </div>
      );
    }
    
    export default DoctorDetails;

















