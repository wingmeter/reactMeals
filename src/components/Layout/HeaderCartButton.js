import { useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const items = useSelector(state => state.cart.itemsInCart);
  const totalAmount = items.length;
  return (
    <button 
    className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};
export default HeaderCartButton;
