// Return all the palindromes in an array


// Anonymous function 
var arr=["1234","12121","appa","madam","raj"]
var raj=function(arr){
    var result=[]
    for(var i=0;i<arr.length;i++){
        var a=arr[i].split("").reverse().join("")
        if(arr[i]===a){
            result.push(arr[i])
        }  
    }
    console.log(result)
}
raj(arr);

// IIFE function

(function(){
     var arr=["1234","12121","appa","madam","raj"]
    var result=[]
    for(var i=0;i<arr.length;i++){
        var a=arr[i].split("").reverse().join("")
        if(arr[i]===a){
            result.push(arr[i])
        }  
    }
    console.log(result)


})()




