import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTodo } from '../../../Actions';
import {ListItemWrapper} from './ListItem.styles';

interface ListItemProps {
	completeTodo(id: any): any;
	todo: {
		title?: string;
		id?: number;
	};
};

const ListItem: React.SFC<ListItemProps> = props => {
	const { completeTodo, todo } = props;
	return (
		<ListItemWrapper>
			{todo.title}
			<div onClick={() =>completeTodo(todo.id)}>
				Complete
			</div>
		</ListItemWrapper>
	);
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    completeTodo: (id) => completeTodo(id),
}, dispatch);

export default connect(null, mapDispatchToProps)(ListItem);