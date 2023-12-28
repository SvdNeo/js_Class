//example1 try without error
try{
    console.log("start")

    console.log("end")
}
catch{
    console.log("No error")
}

// try with error 
try{
    console.log('start')
   // console.log(try)
    console.log('end')
}
catch(error){
    console.log('Error occurred')
}

//try with setTimeout
// try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 1000);
//   } catch (err) {
//     console.log( "won't work" );
//   }

  // setTimeout with try catch
  try{
  setTimeout(() => {
    try{
        console.log(`reachable`)
    }catch(err){
        console.log(`error is caught`)
    }
    
    
  }, 1000)
}catch(err){
console.log(`error`)
}
finally{
    console.log(`end the loop`)
}

//error object
try {
    lalala; // error, variable is not defined!
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
  }

  //optional catch binding 
  let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  console.log( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( err.name );
  console.log( err.message );
}

//“Throw” operator
let json1 = '{"age":30}'
try{
    let user = JSON.parse(json1)
    if(!user.name){
        throw new SyntaxError("Invalid data")
    }
    console.log(user.name)
}catch(err){
    console.log(err.message)
    console.log(err.name)
    console.log(err.stack)
}

let json2 = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json2); // <-- forgot to put "let" before user

  // ...
} catch (err) {
  console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}

let json5 = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json5);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  console.log( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    console.log( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

}

let num = +prompt("Enter a positive number");
let diff, result;

function fib(n) {
  if (n < 0) {
    throw new Error("Must be a positive number");
  } else {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
}

let start = performance.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = performance.now() - start;
}

alert(result || "An error occurred");
alert(`Execution took ${diff.toFixed(2)}ms`);
