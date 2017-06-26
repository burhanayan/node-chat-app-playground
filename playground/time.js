var moment = require('moment');

// Jan 1st 1070 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// var date = moment(); 
// date.add(100,'year').subtract(9,'months');
// console.log(date.format('MMM Do. YYYY'));

// 6:01 am

new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm A'));
