
import { InitialDataActions } from './state.actions';
import { combineReducers, Reducer, createStore } from 'redux';

export const initReducerInitState = {
    initData: undefined
}

export function initReducer(state: IInitReducer = initReducerInitState, action) {
    switch (action.type) {
        case InitialDataActions.SAVE_INIT_DATA:
            let data = action.payload;
            console.log('data saved');
            return {
                initData: data
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
    initData: Array<any>
}