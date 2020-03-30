import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
	FormWrapper,
	TextInputWrapper,
} from './Form.styles';

const TodoForm: React.SFC = () => (
	<FormWrapper onSubmit={() => console.log('hello world')}>
        <TextInputWrapper>
          <label htmlFor="todo">Todo Item</label>
          <Field name="todo" component="input" type="text"/>
        </TextInputWrapper>
        <button type="submit">Submit</button>
	</FormWrapper>
);

export default reduxForm({
  form: 'todo' 
})(TodoForm);