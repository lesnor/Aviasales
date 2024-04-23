import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "./layouts/AppLayout/AppLayout";
import TravelCard from "./components/cards/TravelCard";
import SearchSidebar from "./components/shared/SearhSidebar/SearchSidebar";
import ShowMoreButton from "./components/buttons/ShowMoreButton";
import data from "@/data/mock/dataMock.json";
import { setTickets } from "./state/modules/tickets";
import { AppState } from "./state/store";
import TabPanel from "./components/shared/TabPanel";
import { filterTickets, sortByPriceDescending } from "./utils/function.utils";
import { getFormValues } from "redux-form";
import { SearchSIdebarFV } from "./types/SearchSIdebar/SearchSIdebar.interace";

export const App: FC = () => {
  const dispatch = useDispatch();

  const [displayCount, setDisplayCount] = useState(5);
  const tickets = useSelector((state: AppState) => state.tickets);
  const [filtredData, setFiltredData] = useState(tickets);
  useEffect(() => {
    dispatch(setTickets(sortByPriceDescending(data)));
  }, []);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 5);
  };

  const formValues = useSelector((state: AppState) =>
    getFormValues("Sidebar_Form")(state)
  ) as SearchSIdebarFV;

  useEffect(() => {
    setFiltredData(() => filterTickets(tickets, formValues));
  }, [JSON.stringify(formValues), JSON.stringify(tickets)]);

  const visibleData = filtredData.slice(0, displayCount);
  const isShoweMoreButton = filtredData.length > displayCount;

  return (
    <AppLayout>
      <div style={{ display: "flex" }}>
        <SearchSidebar />

        <div>
          <TabPanel />

          <div>
            {visibleData.map((ticket) => (
              <div style={{ marginBottom: 22 }}>
                <TravelCard {...ticket} key={ticket.id} />
              </div>
            ))}

            {isShoweMoreButton && <ShowMoreButton onClick={handleShowMore} />}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
