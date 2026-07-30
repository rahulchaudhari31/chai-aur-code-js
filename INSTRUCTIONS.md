# 🚀 Chai aur Code - JavaScript Learning Roadmap

## 📖 How to Use This
1. Open each `.js` file and read the code
2. Run it with Node.js: `node "filename.js"`
3. Try the **Try It Yourself** challenges below
4. Don't skip around — files are numbered in learning order

---

## 🟢 PHASE 1: Basics (Files 1–7)

### 1. Hello World (`1basic console.js`)
```js
console.log("hello world");
```
**Try it:** Print your name and age using `console.log()`

### 2. Variables with `let` (`2let.js`)
```js
let age = "rahul";
age = "rahul";
```
**Rule:** `let` can be **reassigned** but not re-declared in same scope.

### 3. Variables with `var` (`3var.js`)
```js
var x = 5;  // old way — avoid using var in modern JS
```
**Rule:** `var` is function-scoped, `let` & `const` are block-scoped.

### 4. Constants with `const` (`4const.js`)
```js
const pi = 3.14;
pi = 5; // ❌ Error! Cannot reassign a constant
```
**Rule:** Use `const` by default. Only use `let` when you need to reassign.

### 5. Objects (`5var.js`)
```js
var person = { age: 30, name: "ram", sex: "male", height: "5.5" };
console.log(person.name);
person.age = 25; // mutate properties
```

### 6. Operators (`6operators.js`)
- `+` adds numbers or joins strings
- `===` checks strict equality (value + type)

### 7. Conditionals (`7conditional statement.js`)
```js
if (age > 18) { /* can vote */ } else { /* can't vote */ }
```

**💪 Practice:** Create an object `car` with `brand`, `year`, `color`. Write an `if` that checks if the car is older than 2010.

---

## 🔵 PHASE 2: Loops & Functions (Files 8–15)

### 8–11. Loops
| Loop | When to use |
|------|-------------|
| `for` | Know how many iterations |
| `while` | Don't know iterations, check first |
| `do...while` | Don't know iterations, run at least once |

### 12, 14. Functions
```js
function add(a, b) { return a + b; }
```
**Tip:** Always ask — what goes **in** (parameters) and what comes **out** (return)?

### 13. Array `push()`
```js
let arr = [1, 2];
arr.push(3); // arr is now [1, 2, 3]
```

### 15. Arrow Functions
```js
const multiply = (x, y) => x * y;
```
**Rule:** If only one expression, no `{}` or `return` needed.

**💪 Practice:** Write an arrow function `isEven` that returns `true` if a number is even.

---

## 🟡 PHASE 3: DOM & Browser (Files 16–17, one.html)

### 16–17. DOM Elements & Events
```js
document.getElementById("myId").textContent = "New text";
element.addEventListener("click", () => alert("Clicked!"));
```
**💪 Practice:** Add a button to `one.html` that changes the background color when clicked.

---

## 🟠 PHASE 4: Intermediate (Files 18–23)

### 18. JSON
```js
JSON.stringify(obj)  // object → string
JSON.parse(str)      // string → object
```

### 19. Modern JS Features
- **Template Literals:** `` `Hello, ${name}!` ``
- **Destructuring:** `const [a, b] = [1, 2];`

### 21. Error Handling
```js
try {
  // risky code
} catch (error) {
  console.log(error.message);
}
```
**Rule:** Always wrap API calls, JSON.parse, and user input in try/catch.

### 22. Async JS (Callbacks)
```js
setTimeout(() => console.log("2 seconds later"), 2000);
```

### 23. Array Methods
```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```
**💪 Practice:** Use `filter()` to get only even numbers from `[1,2,3,4,5,6]`.

---

## 🔴 PHASE 5: OOP (Files 24–25)

### 24. Classes
```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a sound.`); }
}
const dog = new Animal("Dog");
```

### 25. Inheritance
```js
class Dog extends Animal {
  speak() { console.log(`${this.name} barks.`); }
}
```

**💪 Practice:** Create a `Car` class with `brand` and `year`. Create a subclass `ElectricCar` that adds a `batteryLife` property.

---

## 🚩 NOTE
Files `20Promises & await.js`, `Event.js`, and `async.js` are empty — they're placeholder topics. Come back to them after completing the numbered files.

---

## ✅ Quick Reference — Cheatsheet

```
console.log()        → Print to console
let / const          → Declare variables
===                  → Strict equality
if/else              → Conditional logic
for/while/do-while   → Loops
function / () =>     → Define functions
.push()              → Add to array
.map() / .filter()   → Transform/filter arrays
try/catch            → Handle errors
class / extends      → OOP & inheritance
```
