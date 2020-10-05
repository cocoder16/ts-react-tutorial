import React from 'react';
import { Greetings, Counters, MyForm, ReducerSample } from '../../components/withoutRedux';

const grobalVar = {
    name: 'hy'
};

function WithoutReduxContainer() {
    const { name } = grobalVar;
    const hello = (name: string) => {
        console.log(`${name} says hello`);
    };
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };

    return (
        <div>
            <h2>Greetings</h2>
            <Greetings
                name={name}
                onClick={hello}
            />
            <h2>Counters</h2>
            <Counters/>
            <h2>MyForm</h2>
            <MyForm
                onSubmit={onSubmit}
            />
            <h2>ReducerSample</h2>
            <ReducerSample/>
        </div>
    )
}

export { WithoutReduxContainer };