import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTodo } from '../../../Actions';
import {
	ListItemWrapper,
	ListItemTitle,
	ListItemText,
	ListItemDismiss,
} from './ListItem.styles';

interface ListItemProps {
	completeTodo(id: any): any;
	todo: {
		title?: string;
		text?: string;
		id?: number;
	};
};

const ListItem: React.SFC<ListItemProps> = props => {
	const { completeTodo, todo } = props;
	return (
		<ListItemWrapper>
			<ListItemTitle>{todo.title}</ListItemTitle>
			<ListItemText>{todo.text}</ListItemText>
			<ListItemDismiss onClick={() =>completeTodo(todo.id)}>
				Complete
			</ListItemDismiss>
		</ListItemWrapper>
	);
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    completeTodo: (id) => completeTodo(id),
}, dispatch);

export default connect(null, mapDispatchToProps)(ListItem);