import * as firebase from 'firebase';

const config = {
				apiKey: 'AIzaSyDyJLgo-In5F_tqpdYBT2rHemCvi783Xs8',
				authDomain: 'expensify-7d7d7.firebaseapp.com',
				databaseURL: 'https://expensify-7d7d7.firebaseio.com',
				projectId: 'expensify-7d7d7',
				storageBucket: 'expensify-7d7d7.appspot.com',
				messagingSenderId: '499832839072'
};

firebase.initializeApp(config);
console.log('conectat la firebase');

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').once('value').then((snapshot) => { 	const expenses =
// []; 	snapshot.forEach((childSnapshot) => { 		expenses.push({ 			id:
// childSnapshot.key, 			...childSnapshot.val() 		}); 	});
// 	console.log(expenses); }); database.ref('expenses').push({ 	description:
// 'mancare',
// 	note: 'credit card', 	amount: 25, 	createdAt: 123456 });
// database.ref('notes').push({ 	title: 'course', 	body: 'react, python' });
// database.ref('notes').set(notes); const onValueChange =
// database.ref().on('value', (snapshot) => { 	console.log(snapshot.val()); });
// setTimeout(() => { 	database.ref('age').set(29); }, 3500); setTimeout(() => {
// 	database.ref().off(onValueChange); }, 7000); setTimeout(() => {
// 	database.ref('age').set(40); }, 10500); database 	.ref('location/city')
// 	.once('value') 	.then((snapshot) => { 		const val = snapshot.val();
// 		console.log(val); 	}) 	.catch((e) => {}); database 	.ref() 	.set({ 		name:
// 'petru teo', 		age: 39, 		isSingle: false, 		location: { 			city:
// 'Bucharest', 			country: 'Romania' 		} 	}) 	.then(() => { 		console.log('data
// is saved'); 	}) 	.catch((e) => { 		console.log('fail', e); 	});
// database.ref('age').set(40); database.ref('location/city').set('Constanta');
// database.ref('height').set(195); database.ref('weight').set(120); // database
// // 	.ref('isSingle') // 	.remove() // 	.then(() => { // 		console.log('data
// removed'); // 	}) // 	.catch((e) => { // 		console.log('ceva n-a mers'); //
// 	}); database.ref().update({ 	name: 'Mike', 	age: 29, 	job: 'sw engineer',
// 	isSingle: null });