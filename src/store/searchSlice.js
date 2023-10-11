import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = []
const searchSlice = createSlice({
    name: "search",
    initialState: searchInitialState,
    reducers: {
        resultsSearch: (state, action) => {
            return state.concat(action.payload)
        },
        doANewSearch: (state, action) => {
            return action.payload
        }
    }
})

export const { resultsSearch, doANewSearch } = searchSlice.actions
export default searchSlice.reducer