//Sum of all numbers in an array

//Arrow function

var arr=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
let sum_of_numbers=(arr)=>{
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
}
sum_of_numbers(arr);
