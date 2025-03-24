import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
