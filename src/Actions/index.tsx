import { todosRef } from '../firebase.ts';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (newTodo: any) => async dispatch => {
	todosRef.push().set(newTodo);
};

export const completeTodo = (completeTodo: any) => async dispatch => {
	todosRef.child(completeTodo).remove();
};

export const fetchTodos = () => async dispatch => {
	todosRef.on('value', snapshot => {
		dispatch({
			type: FETCH_TODOS,
			payload: snapshot.val()
		});
	});
};

