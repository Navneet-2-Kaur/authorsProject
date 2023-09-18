import React from 'react';
import Create from './views/Create';
import Update from './components/UpdateForm';
import { Route, Routes } from "react-router-dom";
// import AuthorList from './components/AuthorList';
import Main from './views/Main';

function App() {
  return (
    <div className="App">


      <Routes>
        {/* this route is displaying the message from Views Main.js */}
        <Route path="/authors" element={<Main/>}/>
        <Route path="/authors/new" element={<Create/>} />  
        <Route path="/authors/:id/edit" element={<Update/>}/>
      </Routes>


    </div>
  );
}
export default App;

