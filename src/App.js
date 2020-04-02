import React, { Fragment } from "react";

//componentes
import Header from "./components/Header";
import Entradas from "./components/Entradas";
import Categorias from "./components/Categorias";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Entradas />
      <Categorias />
      <Footer />
    </Fragment>
  );
}

export default App;
