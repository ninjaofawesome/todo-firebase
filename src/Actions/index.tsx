import { todosRef } from '../firebase';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (newTodo: any) => async (dispatch: any) => {
	todosRef.push().set(newTodo);
};

export const completeTodo = (completeTodo: any) => async (dispatch: any) => {
	todosRef.child(completeTodo).remove();
};

/* todo: unpack what's going on here, put into MapDispatchToProps in component */
export const fetchTodos = () => async (dispatch: any) => {
	todosRef.on('value', snapshot => {
		dispatch({
			type: FETCH_TODOS,
			payload: snapshot.val()
		});
	});
};

