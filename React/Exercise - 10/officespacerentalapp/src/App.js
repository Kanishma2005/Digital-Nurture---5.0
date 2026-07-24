import React from 'react';
import officeImage from './office_space.png';

function App() {
  // Create an object to store the office space details
  // and a list (array) of office space objects.
  const officeSpaces = [
    {
      Name: "Spark Co-Working Space",
      Rent: 45000,
      Address: "1st Floor, Tech Park Area, Bangalore"
    },
    {
      Name: "Apex Corporate Suite",
      Rent: 75000,
      Address: "4th Floor, Skyline Towers, Mumbai"
    },
    {
      Name: "Vibrant Shared Office",
      Rent: 60000,
      Address: "Suite 102, Innovation Hub, Pune"
    },
    {
      Name: "Quantum Business Center",
      Rent: 95000,
      Address: "Penthouse B, Financial District, Delhi"
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* 3. Heading */}
      <h1>Office Space, at Affordable Range</h1>

      {/* 4. Display image of an office space using <img> element */}
      <img src={officeImage} width="25%" height="25%" alt="Office Space" />

      {/* 7. Loop through the office space list and display for each office */}
      <div style={{ marginTop: '20px' }}>
        {officeSpaces.map((office, index) => (
          <div key={index} style={{ margin: '15px 0', padding: '10px', border: '1px solid #eaeaea', borderRadius: '5px', maxWidth: '350px' }}>
            <div><strong>Name:</strong> {office.Name}</div>
            <div>
              <strong>Rent:</strong>{' '}
              {/* 8. Apply inline CSS to display rent color conditionally */}
              <span style={{ color: office.Rent <= 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
                {office.Rent}
              </span>
            </div>
            <div><strong>Address:</strong> {office.Address}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
