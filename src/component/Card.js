import React from "react";

const Card = ({ item, handleClick }) => {
  const { img, name, brand, category } = item;

  return (
    <div classNameName="d-flex flex-wrap flex-grow justify-content-between  shadow-lg  bg-white rounded-2">
      <div className="card" style={{ width: "25rem" }}>
        <img
          src={img}
          className="card-img-top p-3"
          alt={name}
          style={{ height: "30vh" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <h5>{brand}</h5>
            <div>{category}</div>
            <a
              href="#"
              id="add"
              class="btn btn-info p-2 m-2"
              onClick={() => handleClick("add")}
            >
              +
            </a>
            <a
              href="#"
              id="remove"
              className="btn btn-info p-2 m-2"
              onClick={() => handleClick("remove")}
            >
              -
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
