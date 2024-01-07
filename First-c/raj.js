// Sum of all numbers in an array

// Anonymous function

const arr=[1,2,3,4,5,10,20,5]
const raj=function(arr){
    var sum=0
    for(let i=0;i<arr.length;i++){
         sum=sum+arr[i]
    }
    console.log(sum)
};
raj(arr);


// IIFE function 

(function(){
    var arr=[1,2,3,4,5,10,20,5]
    var sum=0
    for(var i=0;i<arr.length;i++){
         sum=sum+arr[i]
    }
    console.log(sum)
})();
