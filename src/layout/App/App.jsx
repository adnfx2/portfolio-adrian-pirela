////Libraries
//import React from "react";
//import { HashRouter as Router } from "react-router-dom";
////Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
//import ScrollToTop from "./ScrollToTop";
////Styles
import style from "./App.module.scss";

import { HashRouter } from "react-router";

function GridContainer({ children }) {
  return <div className={style.app}>{children}</div>;
}

function App() {
  return (
    <HashRouter>
      <GridContainer>
        <Header />
        <Main />
        <Footer />
      </GridContainer>
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
