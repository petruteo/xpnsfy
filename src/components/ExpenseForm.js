import React from 'react';
import addExpense from '../actions/expenses';
import moment from 'moment';
// import 'react-dates/initialize';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.state = {
        description: '',
        amount: '',
        note: '',
        createdAt : moment(),
        calendarFocused: false,
        error: ''
        };
      }
            
    handleDescriptionChange = (e) => {
        var description = e.target.value;
        
        this.setState(() => ({description}));
        // console.log('----fromhandler ---',this.state.description);
        
    }

    handleAmountChange = (e) => {
        var amount = e.target.value;
        
        this.setState(() => ({amount}));
        // console.log('----fromhandler ---',this.state.amount);
        
    }

    handleNoteChange = (e) => {
        var note = e.target.value;
        
        this.setState(() => ({note}));
        // console.log('----fromhandler ---',this.state.note);
        
    }


    handleSubmit = () => {
        console.log('###from submit ####', this.state, addExpense(this.state));
        
        // props.store.dispatch(addExpense(this.state));
        props.store.dispatch(addExpense({description:'rent2', amount: 109500}));
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))

    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description|| !this.state.amount) {
            //set error state
            var error = "please add description adn amount"
            this.setState(() => ({error}));

        } else {
            //clear err
            this.setState(() => ({error:''}));
            console.log('submitted');
            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render () {
        return (
            <div>
            {this.state.error && this.state.error}
            <h1> 
            Expense Form
            </h1>
            <form onSubmit={this.onSubmit}>
            <input 
            type='text' 
            placeholder='expense name' 
            value={this.state.text} 
            
            onChange={(e) => {
                
                this.handleDescriptionChange(e)}}
             
            />
            <input type='number' placeholder='amount spent' value={this.state.amount} onChange={(e) => {
                
                this.handleAmountChange(e)}} />

            <SingleDatePicker 
            date ={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
            
            />
            <textarea placeholder="add expense description, optional" value={this.state.note} onChange={(e) => {
                
                this.handleNoteChange(e)}} > 
            </textarea> 
            <button>Submit</button>
            </form>

        </div>
        )
        
    }

};