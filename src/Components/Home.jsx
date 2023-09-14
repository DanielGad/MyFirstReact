import React from 'react';
import '../assets/styles/home.css'
import {Link} from 'react-router-dom';
import useFetch from '../useFetch';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const {id} = useParams();
  // eslint-disable-next-line no-unused-vars
  const {data: home} = useFetch(`http://localhost:4000/home/${id}`);
 
    return ( 
    <>
    <div className="home">
        <div className="con1">
          <h1>SCIENCE</h1>
          <p>Here is where you'll get all that you need to know! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Link to="/home/1"><button className='learn'>Learn More.</button></Link>
        </div>

        <div className="con2">
          <h1>TECHNOLOGY</h1>
          <p>Here is where you'll get all that you need to know! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Link to="/home/2"><button className='learn2'>Learn More.</button></Link>
        </div>
        <div className="check-out">
          <h4>Information Technology</h4>
          <Link to="/home/3"><button>Check it Out!</button></Link>
        </div>
      </div>
      <div className="home2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reiciendis voluptas quidem nobis quia in? Id suscipit itaque ipsum illo harum sint ab consequuntur vero sunt, sequi perferendis assumenda quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quo nam minus praesentium eveniet, illum illo, facilis atque harum saepe earum sequi quaerat debitis placeat nulla dolore inventore ipsam error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo amet quis soluta, sapiente provident quidem molestiae officiis deserunt enim architecto sint ea perferendis. Quisquam quibusdam rerum doloribus fugiat corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nostrum nobis ab velit provident eligendi eaque laudantium optio itaque. Qui sed nesciunt maxime deserunt voluptatem dicta accusantium sequi quo hic! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eligendi tempora, quia optio doloribus iusto rem in eius iure maxime cum at tenetur, atque voluptate illum esse cupiditate vero animi.</p>
      </div>
        </>
   );
}
 
export default Home;