//Expenses reducer

const expensesReducerDefaultState= [];

export default (state= expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ]

        case 'REMOVE_EXPENSE':
        
        // console.log('*******',action.id);

            // const clearedExpense = [...state.filter((expense) => expense.id !== action.id)];
            
            const clearedExpense = state.filter(({id}) => id!== action.id);
            console.log('--- from reducer---',clearedExpense);

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

