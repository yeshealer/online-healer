import React, { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyle from './components/GlobalStyle'
import Home from "./views/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
