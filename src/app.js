import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import addExpense from './actions/expenses.js';
import {removeExpense} from './actions/expenses.js';

import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
// console.log(store, typeof(store));



store.dispatch(addExpense({description:'water bill', amount: 4500}));
store.dispatch(addExpense({description:'gas bill', createdAt:1000}));
store.dispatch(addExpense({description:'rent', amount: 109500}));

// store.dispatch(setTextFilter('bill'));
       
// setTimeout(() =>{store.dispatch(setTextFilter("bill"))}, 1500);


const state = store.getState();

// const idToRemove = state.expenses[0].id; 
// console.log('****', idToRemove);

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('---from app.js ---', visibleExpenses);
// const actionRemove = removeExpense({id: idToRemove});
// console.log(actionRemove);

//store.dispatch(removeExpense({id: idToRemove}));
// setTimeout(() =>{store.dispatch(removeExpense({id: idToRemove}))}, 4500);

// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

 
ReactDOM.render(jsx, document.getElementById('app'));