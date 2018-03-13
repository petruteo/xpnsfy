import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';



const itemFromList = (props) => {
    const removeButtonHandler = (id) => {
        console.log('---from expense item ----', id, removeExpense({id}));
        props.dispatch(removeExpense({id}));
    };

    return (<div>{props.expenses.map((expense) => 
        <h3 key={expense.id }>{expense.description} {numeral(expense.amount).format('$0,0.00')} - {moment(expense.createdAt).format('Do MM YYYY')} 
        <button onClick={() => removeButtonHandler(expense.id)}>Remove</button></h3> )}
        </div>
    );
};
    
const mapStateToProps = {};

export default connect()(itemFromList);