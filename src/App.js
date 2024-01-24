
// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';


// export default class App extends Component {
//   pageSize = 15;
//   state={
//     progress:0
//     }
//     setProgress = (progress) =>{
//     setState({progress:progress})
//     }
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//             color='#f11946'
//             progress={state.progress}
//           />
//           <Routes>
//             <Route exact path='/' element={<News setProgress={setProgress} key={1} pageSize={pageSize} country="us" category="general" />}> </Route>
//             <Route exact path='/business' element={<News setProgress={setProgress} key={2} pageSize={pageSize} country="us" category="business" />}> </Route>
//             <Route exact path='/entertainment' element={<News setProgress={setProgress} key={3} pageSize={pageSize} country="us" category="entertainment" />}> </Route>
//             <Route exact path='/general' element={<News setProgress={setProgress} key={4} pageSize={pageSize} country="us" category="general" />}> </Route>
//             <Route exact path='/health' element={<News setProgress={setProgress} key={5} pageSize={pageSize} country="us" category="health" />}> </Route>
//             <Route exact path='/science' element={<News setProgress={setProgress} key={6} pageSize={pageSize} country="us" category="science" />}> </Route>
//             <Route exact path='/sports' element={<News setProgress={setProgress} key={7} pageSize={pageSize} country="us" category="sports" />}> </Route>
//             <Route exact path='/technology' element={<News setProgress={setProgress} key={8} pageSize={pageSize} country="us" category="technology" />}> </Route>
//           </Routes>
//         </Router>
//       </div>

//     )
//   }
// }




import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = ()=> {
  const pageSize = 15;
  const [progress, setProgress] = useState(0);
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key={1} pageSize={pageSize} country="us" category="general" />}> </Route>
            <Route exact path='/business' element={<News setProgress={setProgress} key={2} pageSize={pageSize} country="us" category="business" />}> </Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key={3} pageSize={pageSize} country="us" category="entertainment" />}> </Route>
            <Route exact path='/general' element={<News setProgress={setProgress} key={4} pageSize={pageSize} country="us" category="general" />}> </Route>
            <Route exact path='/health' element={<News setProgress={setProgress} key={5} pageSize={pageSize} country="us" category="health" />}> </Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key={6} pageSize={pageSize} country="us" category="science" />}> </Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} key={7} pageSize={pageSize} country="us" category="sports" />}> </Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} key={8} pageSize={pageSize} country="us" category="technology" />}> </Route>
          </Routes>
        </Router>
      </div>

    )
  }
 export default App;