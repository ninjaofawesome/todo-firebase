import React from 'react';
import Form from '../../Components/Form';
import List from '../../Components/List';
import { AppWrapper } from './App.styles';

const App: React.SFC = () => (
	<AppWrapper>
		<h1>Do This List</h1>
		<Form />
		<List />
	</AppWrapper>
);

export default App;