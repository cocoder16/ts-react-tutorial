import React from 'react';
// import { increase, decrease, increaseBy } from '../../modules/counter';
import { TodoInsert, TodoList } from '../../components/withRedux';

function TodosContainer() {
    // const dispatch = useDispatch();

    // const onIncrease = () => {
    //     dispatch(increase());
    // };

    // const onDecrease = () => {
    //     dispatch(decrease());
    // };

    // const onIncreaseBy = (diff: number) => {
    //     dispatch(increaseBy(diff));
    // };

    return (
        <>
            <TodoInsert/>
            <TodoList/>
        </>
    );
}

export default TodosContainer;