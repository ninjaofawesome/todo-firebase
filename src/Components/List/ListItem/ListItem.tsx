import React from 'react';
import { connect } from 'redux';
import { completeTodo } from '../../../Actions';
import {ListItemWrapper} from './ListItem.styles';

interface ListItemProps {
	completeTodo(): any;
	todo: Object;
};

class ListItem: React.SFC<ListItemProps> = props => {
	const { handleComplete, todo } = props;
	return (
		<ListItemWrapper>
			{todo.title}
			<button onCLick={() => handleComplete(todo.Id)}>
				Complete
			</button>
		</ListItemWrapper>
	);
}

export default connect(null, { completeTodo })(ListItem);