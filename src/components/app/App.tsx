import React from "react";
import "./style.css";
import DefaultLayout from "../layout/defaultLayout";
import Nav from "../nav";

const App: React.FC = ()=>{
  return (
    <>
      <DefaultLayout>
          <Nav/>
      </DefaultLayout>
    </>
  )
}

export default App;
