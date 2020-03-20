import { todosRef } from '../firebase';
import { 
	FETCH_TODOS,
	COMPLETE_TODOS, 
} from '../Actions';

const initialState = {
	todos: [],
}
export default (state = initialState, action: any) => {
	switch(action.type) {
		case FETCH_TODOS:
			return action.payload;
		case COMPLETE_TODOS:
			const removeTodo = todosRef.child(action.payload).remove();
			return Object.assign({}, state, { todos: removeTodo } );	
		default:
			return state;
	}
};