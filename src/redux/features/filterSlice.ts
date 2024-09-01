import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  filterType: string;
  filter: string;
}

const initialState: FilterState = {
  filterType: "",
  filter: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterType: (state, action: PayloadAction<string>) => {
      state.filter = "";
      state.filterType = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilterType, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
