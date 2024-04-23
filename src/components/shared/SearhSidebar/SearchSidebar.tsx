import { FC } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import Checkbox from "@/components/fields/Checkbox";
import { SearchSIdebarFV } from "@/types/SearchSIdebar/SearchSIdebar.interace";

import classes from "./SearchSidebar.module.scss";

const SearchSidebar: FC<InjectedFormProps<SearchSIdebarFV>> = () => {
  return (
    <div className={classes.searchSidebar}>
      <p style={{ fontWeight: 600, fontSize: 13, color: "#211C1C" }}>
        КІЛЬКІСТЬ ПЕРЕСАДОК
      </p>

      <div className={classes.searchSidebar__checkboxWrapper}>
        <Field component={Checkbox} name="all" label="Всі" />
        <Field component={Checkbox} name="noTransfer" label="Без пересадок" />
        <Field component={Checkbox} name="oneTransfer" label="1 пересадка" />
        <Field component={Checkbox} name="twoTransfers" label="2 пересадки" />
        <Field component={Checkbox} name="threeTransfers" label="3 пересадки" />
      </div>
    </div>
  );
};

const mapStateToProps = () => ({
  initialValues: {
    all: false,
    noTransfer: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
});

const withConnect = connect(mapStateToProps);

const withForm = reduxForm<any>({
  form: "Sidebar_Form",
  enableReinitialize: true,
  onSubmitFail: (_errors, _dispatch, submitError) => {
    if (submitError) console.log("error!", _errors);
  },
});

export default compose<FC>(withConnect, withForm)(SearchSidebar);
