import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DoctorDashboard.css'; // Import your custom CSS file
import image from '../componenets/images/1dc80917083a6bf2247c3f9b723ef03c-removebg-preview.png';
import image1 from '../componenets/images/e53e8760a712ca7f9753944e270cc2df-removebg-preview.png';
import image2 from '../componenets/images/Stethoscope_Smiling_Handsome_Male_Doctor_PNG-removebg-preview.png';
import image3 from '../componenets/images/1b0a41cf2132a34bf05a9b4dee30c1a6-removebg-preview.png';
import image4 from '../componenets/images/969f93cde7a93cebc4f3a9c80abaab2c-removebg-preview.png';
import image5 from '../componenets/images/28b183599b55d67d8bfc120bd294c80c-removebg-preview.png';



// Sample doctor data (you can replace this with your own data)
const doctors = [
  {
    id: 1,
    name: 'Dr.Ayesha',
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

function DoctorDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctor-dashboard">
    
      
      
      <div className='main'>
        <h1 className='main-heading'>Find Top Rated Doctors</h1>
        <input
          type="text"
          placeholder="Search Doctor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredDoctors.map((doctor) => (
          <Link className='links' to={`/doctor-dashboard/${doctor.id}`} key={doctor.id}>
            <li>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" height={300} />
              <div className="doctor-info">
                <span className="doctor-name">{doctor.name}</span>
                <span className="doctor-specialty">{doctor.specialty}</span>
                <button className="doctor-details">Details</button>
                
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard; 





