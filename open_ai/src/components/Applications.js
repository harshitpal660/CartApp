import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
export default function Application(props) {
  // console.log("real")
  // console.log(arrayItems.arrayItems)
  // console.log("prop")
  // console.log(arrayItems)

  const arr = props.arrayItems;
  const select = props.selectOption;
  // console.log(props.selectOption)
  return (
    <>
      <h1 className="heading">Open AI APP</h1>
      <div className="body">
        <div id="App">
          {arr.map((item) => (
            <Link
              to="/chat"
              state={item.heading}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div
                className="card"
                onClick={() => select(item.option, item.id)}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="card-image">
                  <img src={logo} alt="logo"></img>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
