import React, { useState } from 'react';

const formEndpoint = "https://formspree.io/f/xwpqneop";


function Waitlist() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    description: '',
    benefit: ''
  });



  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xwpqneop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          setSubmitted(true);
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            description: '',
            benefit: ''
          });
        } else {
          console.error('form submission failed.');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="formHeader"> now accepting beta testers!</h1>

        <label>First name:</label><br />
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Last name:</label><br />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email (Business or Personal, whichever you use most.):</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Business description (tell me what your business does):</label><br />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Tell me how you feel you'll benefit from participating in beta testing:</label><br />
        <input
          type="text"
          name="benefit"
          value={formData.benefit}
          onChange={handleChange}
          required
        />
      </div>

      <div className="buttoncontainer">
        <button type="submit">join</button>
      </div>
      {submitted && (
        <p className="success-message">
          you’re on the list! 
          <br></br>thanks for signing up, i'll be in contact soon.
        </p>
      )}
    </form>
  );
}

export default Waitlist;