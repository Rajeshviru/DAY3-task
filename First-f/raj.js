// Return median of two sorted arrays of the same size.

// Anonymous function 
var arr1=[2,1,4,3]
var arr2=[5,7,8,6]
let raj=function(){
    let a=arr1.sort();
    let b=arr2.sort();
     var arrays=[...a,...b]
     var n=arrays.length;
     if(n%2===0){
        return((arrays[n/2]+arrays[n/2-1])/2) 
     }
     else{
        return arrays[Math.floor(n/2)];
     }
     
}
console.log(raj());

// IIFE function

(function(){
    var arr1=[2,1,4,3]
    var arr2=[5,7,8,6]
    let a=arr1.sort();
    let b=arr2.sort();
     var arrays=[...a,...b]
     var n=arrays.length;
     if(n%2===0){
        console.log(((arrays[n/2]+arrays[n/2-1])/2))
     }
     else{
        console.log(arrays[Math.floor(n/2)]);
     }
     
})();
