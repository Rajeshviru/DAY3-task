//Return all the palindromes in an array

//Arrow function
var arr=["12121","appa","madam","1234","kumar"];
let result=[];
var palindroms=(arr)=>{
    for(let i=0;i<arr.length;i++){
        var splitted_arr=arr[i].split("").reverse().join("");
        if(splitted_arr===arr[i]){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
palindroms(arr);
