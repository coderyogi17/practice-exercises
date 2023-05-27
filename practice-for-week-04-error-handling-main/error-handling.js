// 1.
function sum(array) {
  let sum = 0;
  if (Array.isArray(array)) {
    
  for (let i = 0; i < array.length; i++) {
    
    sum += array[i];
  } 
} else {
  throw new Error("Is not an Array!");
  
}
return sum;
}
try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  console.error(error.name + ": " + error.message);
}


// 2.
function sayName(name){
//const StringVal = null;
if (typeof name === 'string') {
 return name;
} else {
  throw new Error("Is not an string!");
}
}
// tests
try{
let res=sayName("Alex");
console.log(res);
} catch (error) {
  console.error(error.name + ": " + error.message);
}
try{
  let res=sayName(1);
  console.log(res);
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  else{
  console.log(greeting);
  }
}

try{
  let res=greet("");
  console.log(res);
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }