//Print odd numbers in an array

//Arrow function
var arr=[1,2,3,4,5,6,7,8];
var result=[];
var odd_number=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
odd_number(arr);





