import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';



const itemFromList = (props) => {
    const removeButtonHandler = (id) => {
        console.log('---from expense item ----', id, removeExpense({id}));
        props.dispatch(removeExpense({id}));
    };

    return (<div>{props.expenses.map((expense) => 
        <h3 key={expense.id }>{expense.description} {expense.amount} - {expense.createdAt} 
        <button onClick={() => removeButtonHandler(expense.id)}>Remove</button></h3> )}
        </div>
    );
};
    
const mapStateToProps = {};

export default connect()(itemFromList);