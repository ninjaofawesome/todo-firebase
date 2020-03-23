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


