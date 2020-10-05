import React from 'react';
import { CounterContainer, TodosContainer } from '../../containers/WithRedux';

function WithRedux(props: JSX.IntrinsicAttributes) {
    return (
        <>
            <CounterContainer {...props}/>
            <TodosContainer {...props}/>
        </>
    );
}

export default WithRedux;