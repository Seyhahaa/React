import React from "react";
import "./style.css";
import DefaultLayout from "../layout/defaultLayout";
import Nav from "../nav";
import Hero from "../hero";

const App: React.FC = ()=>{
  return (
    <>
      <DefaultLayout>
          <Nav/>
          <div className="content">
            <Hero />

          </div>
          
      </DefaultLayout>
    </>
  )
}

export default App;
