import React from 'react';
import List from '../../Components/List';
import { AppWrapper } from './App.styles';

const App: React.SFC = () => (
	<AppWrapper>
		<h1>Do This List</h1>
		<List />
	</AppWrapper>
);

export default App;