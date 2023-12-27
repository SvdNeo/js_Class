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