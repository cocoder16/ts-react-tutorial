import {
    INCREASE,
    DECREASE,
    INCREASE_BY,
} from './actions';
import {
    increase,
    decrease,
    increaseBy,
} from './actions';

type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// 초기 상태
type CounterState = {
    count: number;
};
    
const initialState: CounterState = {
    count: 0
};

// 리듀서
function counter(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE :
            return { count: state.count + 1 };
        case DECREASE :
            return { count: state.count - 1 };
        case INCREASE_BY :
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;