import {
    SET_COUNTER,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    CLEAR_COUNTER
} from './types';

export const counterIncrement = () => ({ type: INCREMENT_COUNTER });
export const counterDecrement = () => ({ type: DECREMENT_COUNTER });
export const counterClear = () => ({ type: CLEAR_COUNTER });
export const counterSet = (receivedValue) => ({ 
    type: SET_COUNTER,
    payload: receivedValue
});
