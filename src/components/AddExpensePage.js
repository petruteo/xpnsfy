import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        This is from my add expense component.
        <ExpenseForm
            onSubmit={(e) => {
            console.log('*******', startAddExpense(e));
            props.dispatch(startAddExpense(e));
            
            
            props
                .history
                .push('/');
        }}/>

    </div>
);

export default connect()(AddExpensePage);