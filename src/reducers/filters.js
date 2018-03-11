import moment from 'moment';

//Filters reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
    };

export default (state = filterReducerDefaultState, action) => {
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