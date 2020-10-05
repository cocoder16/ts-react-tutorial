import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) { 
    // defaultProps 값이 있거나, 선택적 프로퍼티는 파라미터 값으로 안들어와도 에러가 나지 않지만, 다른 파라미터 값이 안들어오면 에러가 난다.
    // 따라서 mark, optional은 Greetings 컴포넌트를 호출하는 렌더함수 내에서 props값으로 전달해주지 않아도 괜찮지만, name과 onClick은 전달해줘야한다.
    // App.tsx 안에 렌더함수를 보자.
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;