
// var name= "shweta"
// console.log(name)
// var name = "Saurav"
// console.log(name)  output: - shweta , saurav

// let name = "Shweta";
// console.log(name);
//   name = "Saurav";
// console.log(name);
// name = "Shubham" ;
// console.log(name);
// output:-  Identifier 'name' has already been declared

// const age = 22;
// console.log(age);
// const age = 23;
// console.log(age);
// age = 23
// console.log(age)    //output:- Identifier 'age' has already been declared

// var var = 12;
// let let = 12;
// const const = 12;

// var name= 'Shweta'
// var num = 123
// console.log(typeof(name));
// console.log(typeof(num));


// var car = {
//     company: function(){
//       let  OwnerName = "Shweta";
//       console.log(OwnerName);
//     },
//     model: "Thar",
//     color: ["Black","white","Red"]

// };
// car.company();
// car["company"]();

// console.log(car);



// var car2 = car;
// car2.color=["Black","white","Red"]
// car2.company="BMW",
// car2.model="series 5"
// console.log(car.company);


// console.log(car == car2);
// console.log(car === car2);

// var name = "shweta"
//  console.log(name.toUpperCase())
// console.log(name)

// function blockscope() {
//     let name = "Shweta";
//     console.log(name)

// }
// blockscope()
// let name = "Saurav";
// console.log(name)

//string-Method=============================
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);

// var Happy= "I am Happy";
// console.log(Happy.indexOf('Happy'));
// console.log(Happy.charAt(0));
// console.log(Happy.search("am"));
// console.log(Happy.lastIndexOf("I",2))

// var str= "123";
// console.log(typeof(Number(str)));

// var skills = ["MERN", {name:"saurav",}]


// function add(a,b){
 
//    c = a + b;
//    return c
// }
// add(2,3)

// var car ={
//     company:"BMW",
//     model:"series 50",
//     color:"Black"
// }
// console.log(car)
// // car.year = 2014;
// car.year = function (){
// const year = new Date()
// return year.getFullYear()
// }
// console.log(car.year)

// console.log(new Date());

// var obj1 = {
//     fname:"Shweta",
//     lname:"Chaurasiya",
//     getFullName : function(){
//         return this.fname + " "+ this.lname
//     }
// }
// console.log(obj1.getFullName())
//console.log(this)

// 'use strict';
// x= 13;
// console.log(x)


let obj1 = {
    fname : "Shweta",
    lname : "Chaurasiya",
    age: 23,
    skills: ["HTML", "CSS","PYTHON"]
}
console.log(obj1.fname)
for (let x in obj1){
    console.log(obj1[x]);
}