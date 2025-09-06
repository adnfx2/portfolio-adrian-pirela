////Libraries
//import React from "react";
//import { HashRouter as Router } from "react-router-dom";
////Components
import Header from "../Header/Header";
import Main from "../Main/Main";
//import Footer from "../Footer/Footer";
//import ScrollToTop from "./ScrollToTop";
////Styles
// import style from "./App.module.scss";

import { HashRouter } from "react-router";

function App() {
  return (
    <HashRouter>
      <Header />
      <Main />
    </HashRouter>
  );
}

// const App = props => (
//   <Router>
//     <ScrollToTop>
//       <div className={style.app}>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     </ScrollToTop>
//   </Router>
// );

export default App;
