import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
function MealItemForm(props) {
  return (
    <from className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          step: "1",
          min: "1",
          max: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </from>
  );
}

export default MealItemForm;
