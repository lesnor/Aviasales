import { FC, ReactNode } from "react";
import logoPng from "@/assets/logo.png";
import { Link } from "react-router-dom";
import classes from "./AppLayout.module.scss";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className={classes.appLayout__logoContainer}>
        <Link to="/">
          <img src={logoPng} className={classes.appLayout__logo} />
        </Link>
      </div>
      <hr className={classes.appLayout__divider} />

      <div className={classes.appLayout__content}>{children}</div>
    </div>
  );
};

export default AppLayout;
