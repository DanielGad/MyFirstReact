import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useEffect } from "react";

const AboutDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:4000/about/${id}`);

  return ( 
    <div className="service-details">
      { isPending && <div className="loading">Loading...</div> }
      { error && <div className="error">{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          { blog.body }
        </article>
        )}
    </div>
   );
}
 
export default AboutDetails;