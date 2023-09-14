import '../assets/styles/contact.css';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import img1 from '../assets/images/4023_freedomtower_03.jpg'
import location from '../assets/images/Location icon2.png';
import Email from '../assets/images/Email icon2.png';
import contact from '../assets/images/contact.png';
import { useEffect } from 'react';


  const Contact = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [body, setBody] = useState('');
  const [country, setCountry] = useState('');
  const history = useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, email, country, phone, body };
  

    fetch('http://localhost:4000/contact/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      alert('Sumitted successfully');
      history.push('/');
    })


  }
  return ( 
    <><div className="contact">
      <h1>Contact Us</h1>
    </div>
    <div className="contact1">
      <h3>Keep in touch with us</h3>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <label>Country:</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Afganistan">Afganistan</option>
            <option value="Ghana">Ghana</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Togo">Togo</option>
            <option value="United State">United State</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niger">Niger</option>
            <option value="China">China</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Korean">Korean</option>
            <option value="British">British</option>
            <option value="Congo">Congo</option>
          </select>
          <label>Phone Number:</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
          <label>Your Message:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <button>Submit</button>
        </form>
      </div>
      <div className="img-con">
        <img src={img1} alt="img1"/>
        <div className="con-1">
          <h3>Contact Details</h3>
          <p>All the Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis suscipit impedit in ratione corrupti, quibusdam sequi facilis inventore iusto esse, id quidem iure eveniet delectus tempore placeat nostrum reiciendis!</p>
          <img src={location} alt="icon" className='icon'/>
          <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <br />
          <img src={contact} alt="icon" className='icon'/>
          <p className="p1">
            +234 808 433 1922
          </p> <br />
          <img src={Email} alt="icon" className='icon'/>
          <p className="p1">
            adeyemidanielgad@gmail.com
          </p>
        </div>
      </div>
      
      </>
    
   );
}
 
export default Contact;