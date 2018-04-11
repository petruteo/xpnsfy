import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../reducers/expenses';

// ADD_EXPENSE

const addExpense = (expense) => ({type: 'ADD_EXPENSE', expense});

export const startAddExpense = (expenseData = {}) => {
    

    return (dispatch) => {
        console.log('am ajuns in startAddExpense');
        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {
            description,
            note,
            amount,
            createdAt
        };
        database
            .ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            });
    };
};

//REMOVE_EXPENSE

export const removeExpense = ({id} = {}) => {
    console.log('---from actions---', id);

    return {type: "REMOVE_EXPENSE", id}
};

//EDIT_EXPENSE

export const editExpense = (id, updates) => {
    return {type: 'EDIT_EXPENSE', id, updates}
};

export default addExpense;