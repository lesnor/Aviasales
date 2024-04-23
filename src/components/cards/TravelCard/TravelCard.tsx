import { FC } from "react";
import productPng from "@/assets/product.png";

import classes from "./TravelCard.module.scss";
import { transferTextFromCount } from "@/utils/function.utils";
import { TicketModel } from "@/types/Ticket/Ticket.model";

const TravelCard: FC<TicketModel> = ({
  firstFlightTime,
  firstInRoadTime,
  transfers,
  secondFlightTime,
  secondInRoadTime,
  price,
}) => {
  const allTransfers = transfers?.join(", ");
  const trasfersCount = transfers.length;

  const transferText = transferTextFromCount(trasfersCount);

  return (
    <div className={classes.card}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={classes.card__price}>{price} $</div>
        <img
          className={classes.card__image}
          src={productPng}
          alt="Product Image"
        />
      </div>

      <div className={classes.card__description}>
        <div className={classes.card__param}>
          <div className={classes.card__paramTitle}>LHR – DXB</div>
          {firstFlightTime}
        </div>

        <div className={classes.card__param}>
          <div className={classes.card__paramTitle}>В ДОРОЗІ</div>
          {firstInRoadTime}
        </div>

        <div className={classes.card__param}>
          <div className={classes.card__paramTitle}>{transferText}</div>
          {allTransfers}
        </div>
      </div>

      <div className={classes.card__description}>
        <div className={classes.card__param}>
          <div className={classes.card__paramTitle}>DXB – LHR</div>
          {secondFlightTime}
        </div>

        <div className={classes.card__param}>
          <div className={classes.card__paramTitle}>В ДОРОЗІ</div>
          {secondInRoadTime}
        </div>

        <div className={classes.card__param}>
          <div className={classes.card__paramTitle}>{transferText}</div>
          {allTransfers}
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
