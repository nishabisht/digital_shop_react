import React from "react";

const Header = ({ count }) => {
  return (
    <>
      <div className="d-flex bg-info" style={{ width: "100vw", height: "8vh" }}>
        <div className="m-4 fw-bold">
          cart items: <span className="text-black">{count}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
