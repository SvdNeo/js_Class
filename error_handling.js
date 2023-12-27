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
try {
    setTimeout(function() {
      noSuchVariable; // script will die here
    }, 1000);
  } catch (err) {
    console.log( "won't work" );
  }