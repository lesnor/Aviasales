export interface TicketModel {
  firstFlightTime: string
  firstInRoadTime: string
  id: number
  image: string
  price: string
  secondFlightTime: string
  secondInRoadTime: string
  transfers?: string[]
}
  