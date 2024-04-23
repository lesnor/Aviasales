import { TicketModel } from "@/types/Ticket/Ticket.model";

export const transferTextFromCount = (count: number): string=>{
    if(count===0) return "БЕЗ ПЕРЕСАДОК"
    
    if(count===1) return `${1} ПЕРЕСАДКА` 

    return `${count} ПЕРЕСАДКИ`
}


export const sortByPriceDescending = (items: TicketModel[]): TicketModel[] => {
    return [...items].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/\s/g, ""));
      const priceB = parseFloat(b.price.replace(/\s/g, ""));
      return priceA - priceB;
    });
  };
  
 export const parseTime = (timeStr: string): number => {
    const [hours, minutes]: string[] = timeStr.split(" ");
    return parseInt(hours) * 60 + parseInt(minutes);
  };
  
  export const sortByTime = (a: TicketModel, b: TicketModel): number => {
    const totalTimeA: number = parseTime(a.firstInRoadTime) + parseTime(a.secondInRoadTime);
    const totalTimeB: number = parseTime(b.firstInRoadTime) + parseTime(b.secondInRoadTime);
    return totalTimeA - totalTimeB;
  };
  



  export const sortByPriority = (a: TicketModel, b: TicketModel): number => {
    const totalTimeA: number = parseTime(a.firstInRoadTime) + parseTime(a.secondInRoadTime);
    const totalTimeB: number = parseTime(b.firstInRoadTime) + parseTime(b.secondInRoadTime);
   
    if (totalTimeA !== totalTimeB) {
      return totalTimeA - totalTimeB;
    }
  
    const transfersCountA: number = a.transfers.length;
    const transfersCountB: number = b.transfers.length;
    if (transfersCountA !== transfersCountB) {
      return transfersCountA - transfersCountB;
    }
  
    const priceA: number = parseFloat(a.price.replace(/\s/g, ""));
    const priceB: number = parseFloat(b.price.replace(/\s/g, ""));
    return priceA - priceB;
  };
  
 export const filterTickets = (tickets: TicketModel[], filters: any) => {
  const filteredTickets = [...tickets];

  if (filters?.all) {
    return filteredTickets;
  }

  const checkTransfers = (ticket: TicketModel, filterKey: any) => {
    switch (filterKey) {
      case 'noTransfer':
        return ticket.transfers.length === 0;
      case 'oneTransfer':
        return ticket.transfers.length === 1;
      case 'twoTransfers':
        return ticket.transfers.length === 2;
      case 'threeTransfers':
        return ticket.transfers.length === 3;
      default:
        return false;
    }
  };

  const filteredResult = filteredTickets.filter((ticket) => {
    const activeFilters = Object.keys(filters).filter((key) => filters[key]);

    if (activeFilters.length === 0) {
      return true;
    }

    return activeFilters.some((filterKey) => {
      if (filterKey === 'all') {
        return true;
      } else if (filterKey === 'noTransfer') {
        return checkTransfers(ticket, filterKey);
      } else if (checkTransfers(ticket, filterKey)) {
        return true;
      }
      return false;
    });
  });

  return filteredResult;
};