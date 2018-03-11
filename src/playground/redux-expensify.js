import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addEpense = (
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

const removeExpense = ( {id = 0}= {}) => {
    return {
        type:"REMOVE_EXPENSE",
        id
    }
};

//EDIT_EXPENSE

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};

// EDIT_TEXT_FILTER

const editTextFilter = (text ='') => {
    return {
        type: 'EDIT_TEXT_FILTER',
        text
    }
};

//SORT_BY_DATE
const sortByDate = (date) => ({
    type: 'SORT_BY_DATE',
    date
});

// SORT_BY_AMOUNT

const sortbyAmount = (amount) => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

//SET_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


//Expenses reducer

const expensesReducerDefaultState= [];

const expensesReducer = (state= expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ]

        case 'REMOVE_EXPENSE':
        // console.log('------',state);
        // console.log('*******',action.id);

            // const clearedExpense = [...state.filter((expense) => expense.id !== action.id)];
            
            const clearedExpense = state.filter(({id}) => id!== action.id);
            return clearedExpense;
        case 'EDIT_EXPENSE':

            return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    ...expense, 
                    ...action.updates};
            } else {
                return expense;
                
            }
        }
            )

        default: 
            return state;
    }

};


//Filters reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
    };

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'EDIT_TEXT_FILTER':
            return {
                    ...state,
                    text : action.text
                };
        case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'
                };

        case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy: 'amount'
                }
        case 'SET_END_DATE':
                return {
                    ...state,
                    endDate : action.endDate
                }
        case 'SET_START_DATE':
                return {
                    ...state,
                    startDate : action.startDate
                }
        default:
            return state;

    }
};

// Get visible exptensions

const getVisisbleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }

    });
};


// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    // console.log(state, state.expenses, state.filter);
    
    const visibleExpense = getVisisbleExpenses(state.expenses, state.filter);
    console.log(visibleExpense);
});

const expenseOne = store.dispatch(addEpense({ description:'rent', amount:1100, createdAt: -21000}));
const expenseTwo = store.dispatch(addEpense({ description:'coffeE', amount:300, createdAt: -1000}));

// console.log(expenseOne.expense.id, expenseTwo);

// store.dispatch(removeExpense({id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500 }));
// store.dispatch(editTextFilter('Coffee'));
// store.dispatch(editTextFilter(''));

store.dispatch(sortbyAmount()); //amount
// store.dispatch(sortByDate()); //date

// store.dispatch(setStartDate(-1000));
// // store.dispatch(setStartDate());

// store.dispatch(setEndDate(2000));


const demoState ={
    expenses: [{
        id: 'kkjqerq',
        description: 'Jan rent',
        note: 'this was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

