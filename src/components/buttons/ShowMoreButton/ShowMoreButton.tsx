import { FC } from "react";
import classes from "./ShowMoreButton.module.scss";

interface ShowMoreButtonProps {
  onClick: () => void;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ onClick }) => {
  return (
    <button className={classes.showMoreButton} onClick={onClick}>
      Показати ще 5 квитків
    </button>
  );
};

export default ShowMoreButton;
