import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const mapStateToProps = (state) => {
	// console.log('******', state.expenses, state.expenses.length);

	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

const ExpenseDashboardPage = (props) => (
	<div>
		<h1>
			View {props.expenses.length} expenses totaling{' '}
			{numeral(props.expenses.map((expense) => expense.amount).reduce((a, b) => a + b, 0)).format('$0,0.00')}.
		</h1>
		{console.log(props.expenses.length)}

		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default connect(mapStateToProps)(ExpenseDashboardPage);
