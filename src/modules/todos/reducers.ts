import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
} from './actions';
import {
    addTodo,
    toggleTodo,
    removeTodo,
} from './actions';

// 액션들의 타입스크립트 타입 준비
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>;

// 상태를 위한 타입 선언
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};
export type TodosState = Todo[];

// 초깃값 설정
const initialState: TodosState = [
    { id: 1, text: '타입스크립트 배우기', done: true },
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
    { id: 3, text: '투두리스트 만들기', done: false }
];

function todos(state: TodosState = initialState, action: TodosAction): TodosState {
    switch (action.type) {
        case ADD_TODO:
            const nextId = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.payload,
                done: false
            });
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}
  
export default todos;