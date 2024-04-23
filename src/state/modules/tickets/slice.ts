import { TicketModel } from '@/types/Ticket/Ticket.model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TicketModel[] = []

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets: (_state: TicketModel[], { payload }: PayloadAction<TicketModel[]>) =>
      payload,
  },
})

export const { setTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
