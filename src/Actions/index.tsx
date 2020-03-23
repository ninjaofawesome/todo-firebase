import { todosRef } from '../firebase';
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODOS = 'ADD_TODOS';
export const COMPLETE_TODOS = 'COMPLETE_TODOS';

export const addTodo = (newTodo: any) => ({
	type: ADD_TODOS,
	payload: newTodo,
});

export const completeTodo = (todoId: number) => ({
	type: COMPLETE_TODOS,
	payload: todoId,
	
});

/* todo: unpack what's going on here, put into MapDispatchToProps in component */
export const fetchTodos = () => async (dispatch: any) => {
	todosRef.on('value', snapshot => {
		dispatch({
			type: FETCH_TODOS,
			payload: snapshot.val()
		});
	});
};

