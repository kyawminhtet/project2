// var arr = [1,2,3,4,5];
//
// var maparr = arr.map(function(v){
// return v * 2;
// });
// console.log(maparr);
//
// var maparr = arr.map(v => v * 2);
// console.log(maparr);
//
// var filterarr = arr.filter(function(v){
// return v % 2;
// });
// console.log(filterarr);
//
// var filterarr2 = arr.filter(v => v % 2);
// console.log(filterarr2);
//
// var users = ['bab','mary']
// var newusers = [...users,'tom']
//
// var name = "Kyaw"
// var email = 'bob@gmail.com'
// console.log(`Hello ${name}, your email is ${email}`)
//
// var name = "bob"
// var age = 22
//
// var user = {name,age}
//
// var users = {name, age,}

class Animal {
constructor(legs){
this.legs = legs;
}
walk(){
console.log('Animal is walking');
}
}

class Dog extends Animal{
walk(){
console.log('The Dog is walking');
}
}
var bobby = new Dog(2);
bobby.walk();
