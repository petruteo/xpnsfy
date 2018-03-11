import React from 'react';
import {connect}  from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList =  (props) => (
    <div>
    <h1> Expense list</h1>
    
    <ExpenseListItem {...props}/>

    </div>
);

const mapStateToProps = (state) => {
    // console.log('******', state.expenses, state.expenses.length);
    
    return {
        expenses: selectExpenses(state.expenses, state.filters )
    }
};

export default connect(mapStateToProps)(ExpenseList);
