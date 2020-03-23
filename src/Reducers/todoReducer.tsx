import { todosRef } from '../firebase';
import { 
	FETCH_TODOS,
	ADD_TODOS,
	COMPLETE_TODOS, 
} from '../Actions';

const initialState = {
	todos: [{
		title: 'Welcome to the TodoList' ,
		text: 'Dismiss me by clicking the Button',
		id: 0,
	}],
}
export default (state = initialState, action: any) => {
	switch(action.type) {
		case FETCH_TODOS:
			return state;
		case ADD_TODOS:
			todosRef.push().set(action.payload);
			return Object.assign({}, state, {todos: todosRef});
		case COMPLETE_TODOS:
			todosRef.child(action.payload).remove();
			return Object.assign({}, state, { todos: todosRef });	
		default:
			return state;
	}
};