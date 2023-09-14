import '../assets/styles/services.css';
import {Link} from 'react-router-dom';
import useFetch from "../useFetch";
import { useEffect } from 'react';

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // eslint-disable-next-line no-unused-vars
  const { data: service } = useFetch(`http://localhost:4000/services`);

  // const modify = {
  //   backgroundColor: "antiquewhite"
  // }

  return ( 
    <div className="serv">
      {service && <MidService service={service} />}
    </div>
   );
}
 
export default Services;


const MidService = ({service}) => {
  return ( 
    <div className="service">
      <h1>Our Services</h1>
      <div className="container">
        {service.map((services) => (
        <div className="service-con" key={services.id}>
        <h3>{services.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate, officia quia odit deserunt numquam laudantium, enim architecto corrupti accusantium aliquam dolore, amet iste maxime sunt ratione consectetur ipsam. Assumenda!</p>
        <Link to={`/services/${services.id}`}><button>MORE</button></Link>
      </div>
      ))}
      </div>
      </div>
   );
}
 