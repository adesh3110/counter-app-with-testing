import React from "react";
import { Route, Routes } from "react-router-dom";
import IncrementPage from "./pages/IncrementPage";
import DecrementPage from "./pages/DecrementPage";
import IncrementDecrementPage from "./pages/IncrementDecrementPage";
import Nav from "./components/nav";

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<IncrementPage />} />
        <Route path='/decrement' element={<DecrementPage />} />
        <Route path='/both' element={<IncrementDecrementPage />} />
      </Routes>
    </div>
  );
}

export default App;
