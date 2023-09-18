import React, { useState } from 'react'
import axios from 'axios';
import {  useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';



    const AuthorForm = (props) => {
        const [name, setName] = useState(""); 

        const [errors, setErrors] = useState([]);  
        
        const navigate = useNavigate();
        
        const onSubmitHandler = e => {
            e.preventDefault();
            
            axios.post('http://localhost:8000/api/authors/new', {
                name
            })
            .then(res=>navigate("/authors"))
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



        //onChange to update name
        return (
            <div>
                <Link to="/authors" >Home</Link>
                
                <form onSubmit={onSubmitHandler}>
            
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div>

                        <p>
                            <h3>Add a new author:</h3>
                            <label>Name:</label><br/>
                            <input 
                                type="text" 
                                onChange={(e)=>setName(e.target.value)} 
                                value={name}
                            />
                        </p>
                        <button>Submit</button>
                    </div>

                    {/* need to create a seperate div for cancel button in form or it will not cancel submission */}
                    <div>
                        <Link to="/authors" ><button>Cancel</button>
                        </Link>
                        
                    </div>
                    </form>
                        
                        
            </div>
                )
        }; // end of form... only export line follows
        
        export default AuthorForm;

