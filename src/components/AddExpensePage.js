import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import addExpense from  '../actions/expenses';


const AddExpensePage = (props) => (
    <div>
    This is from my add expense component.
    <ExpenseForm 
    onSubmit={(e)=> {
        console.log(e);
        props.dispatch(addExpense(e));
        props.history.push('/');
    }} />

    </div>
);

export default connect()(AddExpensePage);