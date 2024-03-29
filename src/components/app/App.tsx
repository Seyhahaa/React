import React from "react";
import "./style.css";
import DefaultLayout from "../layout/defaultLayout";
import Nav from "../nav";
import Hero from "../hero";
import About from "../about";
import Menu from "../menu";
import Contact from "../contact";
import Footer from "../footer";

const App: React.FC = ()=>{
  return (
    <>
      <DefaultLayout>
          <Nav/>
          <div className="content">
            <Hero />
            <div className="content-inside">
              <About />
              <hr />
              <Menu />
              <hr />
              <Contact/>
            </div>
          </div>
          <Footer />
      </DefaultLayout>
    </>
  )
}

export default App;
