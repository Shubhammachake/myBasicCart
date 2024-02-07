import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addUser, getAllUsers } from "../user";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(
          data.map((item) => {
            return { ...item, quantity: 0 };
          })
        );
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const handleClick = (ele) => {
    let users = getAllUsers();
    let find = users.find((item) => {
      return item.id === ele.id;
    });
    if (find) {
      // If user exists, increment its quantity
      ele.quantity = ele.quantity + 1;
    } else {
      // If user doesn't exist, add it with quantity 1
      ele.quantity = 1;
      addUser(ele);
    }
    // Update state to trigger re-render
    setData([...data]);
  };
  const handleSub = (ele) => {
    let users = getAllUsers();
    let find = users.find((item) => {
      return item.id === ele.id;
    });
    if (find && ele.quantity > 0) {
      // If user exists and quantity is greater than 0, decrement its quantity
      ele.quantity = ele.quantity - 1;
      // Update state to trigger re-render
      setData([...data]);
    }
  };

  return (
    <div className="parent">
      {data.map((item, index) => (
        <div key={index} className="child">
          <img src={item.image} alt={item.title} />
          <br />
          {item.title}
          <br />
          <br />
          <h3> RS-{item.price} /-</h3>
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => {
                handleClick(item);
              }}
            >
              Inc
            </Button>
            {item.quantity} {/* Display quantity of this product */}
            <Button
              onClick={() => {
                handleSub(item);
              }}
            >
              Dec
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
