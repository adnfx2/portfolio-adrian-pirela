//Components
import { HashRouter } from "react-router";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

//Styles
import style from "./App.module.scss";

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

export default App;
