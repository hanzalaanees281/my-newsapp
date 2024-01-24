// import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// export class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">

//         <Link className="navbar-brand" to="/">News App</Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/general">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/business">Business</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/entertainment">Entertainment</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/general">General</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/health">Health</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/science">Science</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/sports">Sports</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/technology">Technology</Link>
//             </li>
//           </ul>
//           <div className="auth-button">
//             <Link className="btn btn-primary mx-1 my-0.5" to="/">Signup</Link>
//             <Link className="btn btn-outline-primary my-0.5" to="/">Login</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//         )
//     }
// }

// export default Navbar



import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ()=> {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">News App</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/general">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
          </ul>
          {/* <div className="auth-button">
            <Link className="btn btn-primary mx-1 my-0.5" to="/">Signup</Link>
            <Link className="btn btn-outline-primary my-0.5" to="/">Login</Link>
          </div> */}
        </div>
      </div>
    </nav>
        )
    }

export default Navbar