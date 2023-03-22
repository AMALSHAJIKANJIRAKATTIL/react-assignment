import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchWrapper } from '_helpers';

// create slice

const name = 'cards';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const cardActions = { ...slice.actions, ...extraActions };
export const cardReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        cards: {}
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}`;

    return {
        getAll: getAll()
    };    

    function getAll() {
        return createAsyncThunk(
            `${name}/getAll`,
            async () => await fetchWrapper.get(`${baseUrl}/cards?sortBy=name:asc&limit=100`)
        );
    }
}

function createExtraReducers() {
    return {
        ...getAll()
    };

    function getAll() {
        var { pending, fulfilled, rejected } = extraActions.getAll;
        return {
            [pending]: (state) => {
                state.cards = { loading: true };
            },
            [fulfilled]: (state, action) => {
                state.cards = action.payload;
            },
            [rejected]: (state, action) => {
                state.cards = { error: action.error };
            }
        };
    }
}
