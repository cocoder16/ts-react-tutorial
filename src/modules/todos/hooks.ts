import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../';
import { addTodo, toggleTodo, removeTodo } from './actions';

// 여기서부터 export하는 애들은 redux store에서 관리하는 state들을 container에서 component로 props로 넘기지말고, 어떤 함수형 컴포넌트 내에서도 바로 사용하기 위함이다.
export function useTodos() {
    const todos = useSelector((state: RootState) => state.todos);
    return todos;
}

export function useAddTodo() {
    const dispatch = useDispatch();
    return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}

export function useTodoActions(id: number) {
    const dispatch = useDispatch();

    const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
    const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

    return { onToggle, onRemove };
}