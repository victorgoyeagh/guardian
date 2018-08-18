
import { InitialData } from './state.actions';
import { combineReducers, Reducer, createStore } from 'redux';

export const initReducerInitState = {
    Data: undefined
}

export function initReducer(state: IInitReducer = initReducerInitState, action) {
    switch (action.type) {
        case InitialData.SAVE_INIT_DATA:
            let data = action.payload;
            return {
                Data: data
            }
        default:
            return state;
    }
}

export const appInitialState = {
    initReducerInitState
}

export const RootReducer = combineReducers({
    initData: initReducer
});

export interface IInitReducer {
    Data: Array<any>
}