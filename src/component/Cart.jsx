import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getAllUsers } from "../user";

function Cart() {
  const [total, setTotal] = useState(0);
  const [arr, setArr] = useState([]);
  const allUsers = getAllUsers(); // Get the array of users

  console.log("cart", allUsers);

  useEffect(() => {
    if (allUsers.length > 0) {
      let value = allUsers.reduce((acc, user) => {
        return acc + (user.price * user.quantity || 0);
      }, 0);
      setTotal(value.toFixed(1));
      setArr([...allUsers]);
    }
  }, [allUsers]);

  const handleInc = (user) => {
    user.quantity = user.quantity + 1;
    setArr([...arr]);
    calculateTotal(arr);
  };

  const handleDec = (user) => {
    if (user.quantity > 0) {
      user.quantity = user.quantity - 1;
      setArr([...arr]);
      calculateTotal(arr);
    }
  };

  const calculateTotal = (users) => {
    let value = users.reduce((acc, user) => {
      return acc + (user.price * user.quantity || 0);
    }, 0);
    setTotal(value.toFixed(1));
  };

  return (
    <>
      <div className="grid-container">
        {arr.map((item, id) => (
          <div className="grid-item" key={id}>
            <img className="img" src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <h4>RS:-{item.price}/-</h4>
            <Button onClick={() => handleInc(item)}>Inc</Button>
            Quantity:-{item.quantity}
            <Button onClick={() => handleDec(item)}>Dec</Button>
          </div>
        ))}
      </div>
      <br />
      {arr.length > 0 && (
        <div className="Total">
          <h4>Total Amount:-{total}/-</h4>
        </div>
      )}
    </>
  );
}

export default Cart;
