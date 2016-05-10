// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

//  CODE INSIDE HERE   //
  var previousValue;
  for (i=1;i<arr.length;i+=1){
    if(previousValue == null) var previousValue = arr[i-1];
    var currentValue = arr[i];
    previousValue = callback(previousValue,currentValue)
    }

  return previousValue;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;


/*
callback
Function to execute on each value in the array, taking four arguments:
previousValue
The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
currentValue
The current element being processed in the array.
currentIndex
The index of the current element being processed in the array.
array
The array reduce was called upon.
The first time the callback is called, 
previousValue and currentValue can be one of two values. If initialValue is 
provided in the call to reduce, then previousValue will be equal to 
initialValue and currentValue will be equal to the first value in the array. 
If no initialValue was provided, then previousValue will be equal to the first 
value in the array and currentValue will be equal to the second.
*/