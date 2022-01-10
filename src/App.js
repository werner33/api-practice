import React, {Suspense, useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Staff from './Staff';
import StudentCollection from './StudentCollection';
// import Staff from './Staff';

import './App.css';

const Staff = React.lazy(() => import('./Staff'));


function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
      fetch('https://codewars-tracker-be.herokuapp.com/users/fellows')
      .then( res => res.json())
      .then(data => {
          setStudents(data)
      })
  }, []);




  return (
    <Router>
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/">Students</Link>
            </li>
            <li>
              <Link to="/Staff">Staff</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<StudentCollection students={students}/>} /> 
          <Route path="/staff" element={
            <Suspense fallback={<div>Loading...</div>}>
               <Staff />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
