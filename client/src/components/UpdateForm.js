import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  
  
  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/authors/" + id + "/edit", {
        name
      })
      .then((res) => navigate("/authors"))
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })              
  }

  return (
    // Ternary Statement: Since getting information from form takes time.
    name ? (
      <div>
        <h1>Favorite Authors</h1>
        <Link to="/authors">Home</Link>

        <h3>Edit this author: </h3>

        <form onSubmit={updateAuthor}>
          {errors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}

          <div>
            <p>
              <label>Name:</label>
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </p>

            <button>Submit</button>
          </div>
          <div>
            <Link to="/authors">
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default Update;
