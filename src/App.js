import React from "react";
import Navbar from "./comp/Navbar";
import Main from "./comp/Main";
import Offer from "./comp/Offer";
import History from "./comp/BreifHistory";
import Footer from "./comp/Footer";
function App() {
  return (
    <>
        <Navbar />
        <Main />
        <Offer />
        <History />
        <Footer />
    </>
  );
}

export default App;
