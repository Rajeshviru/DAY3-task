//Convert all the strings to title caps in a string array

//Arrow function

var arr=["raj","kumar","vishnu"];
var result=[];
var title_caps=(arr)=>{
    for(var i=0;i<arr.length;i++){
        var splitted=arr[i][0].toUpperCase()+arr[i].slice(1);
        result.push(splitted);
    }
    console.log(result);
}
title_caps(arr);



