import React, { useEffect } from "react";
import axios from "axios";
// import { useParams} from "react-router-dom";
import { Link } from "react-router-dom"



const AuthorList = (props) => {



// once a page renders, use effect lets us the get authors at least once
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/")
      .then((res) =>{
        props.setAuthors(res.data)
      })
      .catch((err) => console.error(err));
  },[]);

  const deleteAuthor = (authorId) => {
    axios.delete(`http://localhost:8000/api/authors/` + authorId)
    .then(res => {
        console.log(props.authors)
        /// this allow for a quck front end response when an author is deleted
        let updateList = props.authors.filter(item => item._id !== authorId )
        props.setAuthors(updateList);
      })
      .catch(err => console.error(err));
  }



  return (
    <div>
      <section>
        <Link to={`/authors/new`} activeClassName="active" >
          <button>Add an Author</button>
        </Link>
          <p>We have quotes by:</p>
          <table className="table">
              <thead>
                  <tr>
                      <th>Author</th>
                      <th>Actions</th>

                  </tr>

              </thead>
              <tbody>

      {props.authors.map((author, i) => 
        <tr key={i}> 
        
      <td><strong>{author.name}</strong></td> 

        <button onClick={(e) => {deleteAuthor(author._id)}} >Delete</button>
        
        <Link to={`/authors/${author._id}/edit`} activeClassName="active"> 
          <button>Edit </button>
        </Link>
        </tr>
      )}
      
      

              </tbody>
          </table>
      </section>
    </div>
  );
};



export default AuthorList;
