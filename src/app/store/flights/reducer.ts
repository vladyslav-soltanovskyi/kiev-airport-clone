import { createSlice } from '@reduxjs/toolkit'
import { IFlightsState } from './types'
import {
  changeSearchText,
  fetchFlights,
  selectDate
} from './actions'
import {
  getDefaultSearchParam,
  getRecievArrival,
  getRecievDeparture
} from './helpers'
import { getDateByParams } from 'utils/dates'

const initialState: IFlightsState = {
  arrivals: [],
  departures: [],
  isFetching: false,
  searchText: getDefaultSearchParam(),
  selectedDate: getDateByParams()
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchFlights.rejected, (state, { payload }) => {
        state.isFetching = false;
      })
      .addCase(fetchFlights.fulfilled, (state, { payload }) => {
        const { body } = payload;
        const { departure, arrival } = body;

        const arrivals = arrival.map(getRecievArrival);
        const departures = departure.map(getRecievDeparture);

        state.isFetching = false;
        state.arrivals = arrivals;
        state.departures = departures;
      })
      .addCase(selectDate, (state, { payload }) => {
        state.selectedDate = payload;
      })
      .addCase(changeSearchText, (state, { payload }) => {
        state.searchText = payload;
      })
  },
  reducers: {}
})

export const { reducer } = eventsSlice