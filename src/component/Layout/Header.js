import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>DomiDoms</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} />
      </div>
    </>
  );
};
export default Header;
