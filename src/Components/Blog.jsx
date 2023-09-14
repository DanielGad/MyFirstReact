import '../assets/styles/blogs.css';
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
// import img from './images/aaaaaaaa.jpg'

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // eslint-disable-next-line no-unused-vars
  const { data: blogs, isPending, error } = useFetch(`http://localhost:4000/blogs`);

  return ( 
      <div className="blog">
          {blogs && <MidBlog blogs={blogs} />}
      </div>
   );
}
 
export default Blog;


const MidBlog = ({ blogs }) => {

    // const changeImage = () => {
      
    // }
   
    return ( 
      <div className="blog">
        <h1>Our Blogs!</h1>
       <div className="blog-content">
        {blogs.map((blog) => (
          <div className="blog1" key={blog.id}>
            <img src={blog.image} alt="" />
            <h3>{blog.title}</h3>
          <p>Written by {blog.author}</p>
          <Link to={`/blogs/${blog.id}`}><button>View</button></Link>
        </div>
        ))}
       
        </div>
        </div>
     );
  }