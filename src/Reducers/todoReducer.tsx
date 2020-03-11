import { FETCH_TODOS } from '../Actions';

export default (state = {}, action: any) => {
	switch(action.type) {
		case FETCH_TODOS:
			return action.payload;
		default:
			return state;
	}
};