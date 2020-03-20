import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import {ListWrapper} from './List.styles';

// more tk on this object
interface ListProps {
	todos: Array<Object>;
};

const List: React.SFC<ListProps> = props => (
	<ListWrapper>
		{props.todos.map((item: any, index: number) => (
			<ListItem 
				key={`listItem-${index}`} 
				todo={item}
			/>
		))}
	</ListWrapper>
);

const mapStateToProps = (state: any) => {
  return {
    todos: state.todoReducer.todos || [{}],
  }
};


export default connect(mapStateToProps)(List);