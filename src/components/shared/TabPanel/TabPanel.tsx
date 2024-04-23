import { FC } from "react";

import classes from "./TabPanel.module.scss";

import { useHandleTabs } from "@/hooks/useHandleTabs";

const TabPanel: FC = () => {
  const { activeTab, handleTabClick } = useHandleTabs();

  return (
    <div className={classes.tabPanel}>
      <div
        className={`${classes.tabPanel__tab} ${
          activeTab === 0 && classes.active
        }`}
        style={{
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
        onClick={() => handleTabClick(0)}
      >
        Найдешевший
      </div>

      <div
        className={`${classes.tabPanel__tab} ${
          activeTab === 1 && classes.active
        }`}
        onClick={() => handleTabClick(1)}
      >
        Найшвидший
      </div>

      <div
        className={`${classes.tabPanel__tab} ${
          activeTab === 2 && classes.active
        }`}
        style={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        onClick={() => handleTabClick(2)}
      >
        Оптимальний
      </div>
    </div>
  );
};

export default TabPanel;
