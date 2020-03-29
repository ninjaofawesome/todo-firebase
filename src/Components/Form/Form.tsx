import React from 'react';
import {
	FormWrapper,
	TextInputWrapper,
	SubmitButton
} from './Form.styles';

const Form: React.SFC = () => (
	<FormWrapper>
		<TextInputWrapper 
			name='inputField'
			type='text'	
			placeholder='Add a todo'
			onChange={() => console.log('ch-ch-ch-changes')}
		/>
		<SubmitButton 
			name='submitButton'
			type='submit'
			value='Add'		
			onChange={() => console.log('submitted!')}
		/>
	</FormWrapper>
);

export default Form;