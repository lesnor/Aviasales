import { FC, useState } from "react";
import { WrappedFieldProps } from "redux-form";

import classes from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string | JSX.Element;
}

const Checkbox: FC<CheckboxProps & WrappedFieldProps> = ({ input, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prev) => {
      input.onChange(!prev);
      return !prev;
    });
  };

  return (
    <label className={classes.checkbox}>
      <input
        type="checkbox"
        className={classes.checkbox__input}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span className={classes.checkbox__square}></span>
      <span className={classes.checkbox__label}>{label}</span>
    </label>
  );
};

export default Checkbox;
