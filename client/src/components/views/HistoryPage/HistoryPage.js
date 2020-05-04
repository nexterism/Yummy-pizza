import React, { useEffect, useState } from "react";
import Axios from "axios";

function HistoryPage(props) {
  const [History, setHistory] = useState([]);

  useEffect(() => {
    Axios.get("/api/users/getHistory").then((response) => {
      if (response.data.success) {
        setHistory(response.data.history);
      } else {
        alert("Faild to get History");
      }
    });
  }, []);

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        position: "relative",
        top: "150px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>History</h1>
      </div>
      <br />

      <table>
        <thead>
          <tr>
            <th>Payment Id</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date of Purchase</th>
          </tr>
        </thead>

        <tbody>
          {props.user.userData &&
            props.user.userData.history &&
            props.user.userData.history.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.dateOfPurchase}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryPage;
