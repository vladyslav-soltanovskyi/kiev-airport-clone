import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { DtoFlights } from 'types/flight';
import { formatDateQuery } from 'utils/dates';
import { getFlights } from './gateWay';

export const fetchFlights = createAsyncThunk<DtoFlights, Date>(
  'flights/get-flights',
  async (day, thunkAPI) => {
    try {
      const formatedDay = formatDateQuery(day);
      return await getFlights(formatedDay);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const selectDate = createAction<Date>('flights/selectDate')