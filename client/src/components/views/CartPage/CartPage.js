import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import DELIVERY from "./Sections/DELIVERY";
import { Result, Empty, Button } from "antd";
import Axios from "axios";
import Paypal from "../../utils/Paypal";

function CartPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            if (response.payload.length > 0) {
              calculateTotal(response.payload);
            }
          }
        );
      }
    }
  }, [props.user.userData]);

  const calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
    setShowTotal(true);
  };

  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.cartDetail.length <= 0) {
        setShowTotal(false);
      } else {
        calculateTotal(response.payload.cartDetail);
      }
    });
  };
  const transactionSuccess = (data) => {
    let variables = {
      cartDetail: props.user.cartDetail,
      paymentData: data,
    };
    Axios.post("./api/user/successBuy", variables).then((response) => {
      if (response.data.success) {
        setShowSuccess(true);
        setShowTotal(false);

        dispatch(
          onSuccessBuy({
            cart: response.data.cart,
            cartDetail: props.user.cartDetail,
          })
        );
      } else {
        alert("Failed");
      }
    });
    // dispatch(
    //   onSuccessBuy({
    //     cartDetail: props.user.cartDetail,
    //     paymentData: data,
    //   })
    // ).then((response) => {
    //   if (response.payload.success) {
    //     setShowSuccess(true);
    //     setShowTotal(false);
    //   }
    // });
  };

  const transactionError = () => {
    console.log("Paypal error");
  };

  const transactionCanceled = () => {
    console.log("Transaction canceled");
  };
  function handleClick(e) {
    e.preventDefault();
    alert("Your order is confirmed.");
  }

  return (
    <div
      style={{
        width: "85%",
        margin: " auto",
        position: "relative",
        top: "150px",
      }}
    >
      <h1>My Cart</h1>
      <div>
        <UserCardBlock
          products={props.user.cartDetail}
          removeItem={removeFromCart}
        />

        {ShowTotal ? (
          <div style={{ marginTop: "3rem" }}>
            <h2>Subtotal amount: ${Total} </h2>
            <h2>Delivery amount: ${5} </h2>
            <hr
              style={{ width: "25%", marginLeft: "0", textAlign: "left" }}
            ></hr>
            <h2>Total amount: ${Total + 5} </h2>
          </div>
        ) : ShowSuccess ? (
          <Result status="success" title="Successfully Purchased Items" />
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <br />
            <Empty description={false} />
            <p>No Items In the Cart</p>
          </div>
        )}
        <DELIVERY />
      </div>
      {/* <button onClick={<Result />}>CheckOut</button> */}
      {/* Paypal Button */}

      {ShowTotal && (
        <Paypal
          toPay={Total}
          onSuccess={transactionSuccess}
          transactionError={transactionError}
          transactionCanceled={transactionCanceled}
        />
      )}
    </div>
  );
}

export default CartPage;
