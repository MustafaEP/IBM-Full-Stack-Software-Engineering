import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      İsim: ${formData.name}
      E-posta: ${formData.email}
      Geri Bildirim: ${formData.feedback}
      Reyting: ${formData.rating}
    `;

    const isConfirmed = window.confirm(
      `Lütfen bilgilerinizi onaylayın:\n\n${confirmationMessage}`);

    if(isConfirmed) {
      console.log("Geri Bildirim Gönderiliyor:", formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Değerli geri bildiriminiz için teşekkür ederiz');
    }
  }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input type='text' name='name' placeholder='Adınız' value={formData.name} onChange={handleChange}/>
        <input type='email' name='email' placeholder='E-posta Adresiniz' value={formData.email} onChange={handleChange}/>
        <textarea name='feedback' placeholder='Geri Bildirimiz' value={formData.feedback} onChange={handleChange}></textarea>
        <div>
          <span>Bizi Değerlendirin</span>
            <p>
              <input type="radio" name="rating" 
                value="1" onChange={handleChange} /> 
              1
            </p>
            <p>
              <input type="radio" name="rating" 
                value="2" onChange={handleChange} /> 
              2
            </p>
            <p>
              <input type="radio" name="rating" 
                value="3" onChange={handleChange} /> 
              3
            </p>
            <p>
              <input type="radio" name="rating" 
                value="4" onChange={handleChange} /> 
              4
            </p>
            <p>
              <input type="radio" name="rating" 
                value="5" onChange={handleChange} /> 
              5
            </p>      
        </div>

        <button type='submit'>Geri Bildirim Gönder</button>

      </form>
    </>
  );
};

export default FeedbackForm;
