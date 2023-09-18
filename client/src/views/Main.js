import AuthorList from "../components/AuthorList";
import React, { useEffect, useState } from 'react'
import axios from "axios";
    
const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
        
            setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
            <h1>Author</h1>
            {loaded && <AuthorList authors={authors} setAuthors={setAuthors}/>}
        </div>
    )
}
    
export default Main;





