import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
// import { DUMMY_MEALS } from "../Meals/AvailableMeals";


const Cart = (props) => {
  const items = useSelector(state => state.cart.itemsInCart);
  const totalAmount = items.reduce((acc, meal) => acc += meal.price, 0);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item, i) => (
        <li key={i} className={classes.meal_list}>
        <p>{item.name}</p>
        <span className={classes.price}>${item.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}
        onClick={() => props.setShowModal(false)}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
