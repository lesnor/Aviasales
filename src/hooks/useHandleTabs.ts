import { useEffect, useState } from "react";
import { TicketModel } from "@/types/Ticket/Ticket.model";
import { useDispatch } from "react-redux";
import { setTickets } from "@/state/modules/tickets";
import { sortByPriceDescending, sortByPriority, sortByTime } from "@/utils/function.utils";

import data from "@/data/mock/dataMock.json";


export const useHandleTabs = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tickets: TicketModel[] = data;

  useEffect(() => {
    if (activeTab === 0) {
      dispatch(setTickets(sortByPriceDescending(tickets)));
    }

    if (activeTab === 1) {
      const sortedTickets: TicketModel[] = [...tickets].sort(sortByTime);

      dispatch(setTickets(sortedTickets));
    }

    if (activeTab === 2) {
      const sortedTickets: TicketModel[] = [...tickets].sort(sortByPriority);

      dispatch(setTickets(sortedTickets));
    }
  }, [activeTab]);


  return {handleTabClick, activeTab }
}