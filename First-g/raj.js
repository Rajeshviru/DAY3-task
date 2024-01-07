//Remove duplicates from an array

// Anonymous function
var arr=["a","b","c","d","a","c"]

var result=function(arr){
    var values=[];
    for(let i=0;i<arr.length;i++){
        var count=0;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count===0){
             values.push(arr[i]);            
        }
    }
     console.log(values.sort());
}
result(arr);

// IIFE function

(function(){
    var arr=["a","b","c","d","a","c"]
    var values=[];
    for(let i=0;i<arr.length;i++){
        var count=0;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count===0){
             values.push(arr[i]);
        }
    }
     console.log(values.sort());
})();
