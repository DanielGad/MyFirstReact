import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useEffect } from "react";

const BlogDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:4000/blogs/${id}`);
 

  return ( 
    <div className="blog-details">
      { isPending && <div className="loading">Loading...</div> }
      { error && <div className="error">{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          { blog.body }
        </article>
        )}
    </div>
   );
}
 
export default BlogDetails;