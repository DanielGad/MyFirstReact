import '../assets/styles/about.css';
import img1 from '../assets/images/female-male-enterpreneurs-have-meeting-office.jpg';
import img2 from '../assets/images/business-woman-businessman-looks-laptop-screen-outdoors-meeting-partners_266732-19542.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <div className="about">
      <h1>About Us</h1>
      <div className="about1">
        <div className="about1-1">
          <h2>Building Brands is our Business</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum est delectus minima incidunt. Eaque ut accusamus, aliquam nihil architecto nobis provident dolorem possimus dolorum magni iste cupiditate, modi soluta!</p>
        <Link to="/about/1"><button>MORE</button></Link>
        </div>
        <img src={img1} alt="img1"/>
      </div>

      <div className="about2">
        <div className="about2-1">
          <h2>Making the customer the hero of our story</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum est delectus minima incidunt. Eaque ut accusamus, aliquam nihil architecto nobis provident dolorem possimus dolorum magni iste cupiditate, modi soluta!</p>
        <Link to="/about/2"><button>Learn More</button></Link>
        </div>
        <img src={img2} alt="img1"/>
      </div>
      <div className="connn">
      <div className="about1">
        <div className="about1-1">
          <h2>Building Brands is our Business</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum est delectus minima incidunt. Eaque ut accusamus, aliquam nihil architecto nobis provident dolorem possimus dolorum magni iste cupiditate, modi soluta!</p>
        <Link to="/about/1"><button>MORE</button></Link>
        </div>
        <img src={img1} alt="img1"/>
      </div>

      <div className="about2">
        <div className="about2-1">
          <h2>Making the customer the hero of our story</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum est delectus minima incidunt. Eaque ut accusamus, aliquam nihil architecto nobis provident dolorem possimus dolorum magni iste cupiditate, modi soluta!</p>
        <Link to="/about/2"><button>Learn More</button></Link>
        </div>
        <img src={img2} alt="img1"/>
      </div>
      </div>
    </div>
   );
}
 
export default About;