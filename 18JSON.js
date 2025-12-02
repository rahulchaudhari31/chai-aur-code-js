let user = { "name": "Rahul", "age": 25 };
let jsonString = JSON.stringify(user); // Convert object to JSON string
let obj = JSON.parse(jsonString);  
console.log(obj);  