// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";

function App() {
  // const cards = [
  //   {
  //     img: "";
  //     title: "";
  //     likes: 128,
  //     comments: 31
  //   }
  // ]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
