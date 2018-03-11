import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
    { description = "", 
    note = "", 
    amount = 0, 
    createdAt = 0 
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
    
});

//REMOVE_EXPENSE

export const removeExpense = ( {id} = {}) => {
    console.log('---from actions---', id);
    
    return {
        type:"REMOVE_EXPENSE",
        id
    }
};

//EDIT_EXPENSE

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};

export default addExpense;