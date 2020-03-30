import React from 'react';
import TodoForm from '../../Components/Form';
import List from '../../Components/List';
import { AppWrapper } from './App.styles';

const App: React.SFC = () => (
	<AppWrapper>
		<h1>Do This List</h1>
		<TodoForm />
		<List />
	</AppWrapper>
);

export default App;