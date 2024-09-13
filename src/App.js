import React, { useState, useEffect } from "react";
import Card from "./component/Card";
import "./App.css";
import pen from "./assest/image/pen.jpg";
import mouse from "./assest/image/mouse.jpg";
import keyboard from "./assest/image/keyboard.jpg";
import monitor from "./assest/image/monitor.jpg";
import Header from "./component/Nav/Header";
import Login from "./component/Prop/Login/Login";
import HeaderPublic from "./component/Nav/HeaderPublic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./component/Registration/Register";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [count, setCount] = useState(0);
  console.log(count);
  const prodList = [
    {
      img: pen,
      name: "Gel pen",
      brand: "Pentonic",
      category: "Stationary",
    },
    {
      img: mouse,
      name: "Mouse",
      brand: "Logitech",
      category: "Computer Accessories",
    },
    {
      img: keyboard,
      name: "Keyboard",
      brand: "Portronics",
      category: "Computer Accessories",
    },
    {
      img: monitor,
      name: "Monitor",
      brand: "Samsung",
      category: "Computer Accessories",
    },
  ];

  useEffect(() => {
    if (count > 0) {
      alert(`Product in cart: ${count}`);
    }
  }, [count]);

  const handleClick1 = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleClick = (btn) => {
    if (btn === "add") {
      setCount((prevState) => prevState + 1);
    } else if (btn === "remove") {
      if (count > 0) {
        setCount((prevState) => prevState - 1);
      } else {
        alert("No product in cart");
      }
    } else {
      console.log("invalid input for btn");
    }
  };

  if (isLogin) {
    return (
      <>
        <div className="fluid-container" style={{ width: "100%" }}>
          <Header count={count} />
          <div className="d-flex justify-content-center flex-wrap  gap-4 ">
            <div
              className="d-flex justify-content-center align-content-center m-3 p-2 h3"
              style={{ width: "100%" }}
            >
              Product details
            </div>
            {prodList.map((item, index) => (
              <Card item={item} handleClick={handleClick} key={index} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="fuild-container" style={{ width: "100%" }}>
        <HeaderPublic />
        <div
          className="d-flex flex-wrap flex-grow justify-content-center align-content-center"
          style={{ height: "80vh" }}
        >
          <Login setLogin={setLogin} />
        </div>
      </div>
    );

    // return (
    //   <>
    //     <div className="fuild-container" style={{ width: "100%" }}>
    //       <HeaderPublic />
    //       <div
    //         className="d-flex flex-wrap flex-grow justify-content-center align-content-center"
    //         style={{ height: "80vh" }}
    //       >
    //         <Register />
    //       </div>
    //     </div>
    //   </>
    // );
  }
}

export default App;
