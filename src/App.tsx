import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
  // return (
  //   <div className="container">
  //     <div className="p-6 max-w-sm mx-auto m-6 bg-gray-500 rounded-xl shadow-lg flex items-center space-x-4">
  //       <div>
  //         <AiOutlineWhatsApp size={50} color={"white"} />
  //       </div>
  //       <div>
  //         <div className="text-xl font-medium text-white">ChitChat</div>
  //         <p className="text-blue-450">You have a new message!</p>
  //       </div>
  //     </div>
  //     <div className="container p-4">
  //       <TailWindCssButton>Test</TailWindCssButton>
  //     </div>
  //   </div>
  // );
}

// const TailWindCssButton: React.FC = ({ children }) => {
//   return (
//     <button className="bg-blue-400 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">
//       {children}
//     </button>
//   );
// };

export default App;
