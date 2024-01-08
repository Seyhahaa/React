import React from "react";
import "./style.css";
import DefaultLayout from "../layout/defaultLayout";

const App: React.FC = ()=>{
  return (
    <>
      <h1>Hello Dom</h1>
      <DefaultLayout>
          Hello Dom
          <h1>Hi</h1>
      </DefaultLayout>
    </>
  )
}

export default App;
