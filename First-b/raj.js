// Convert all the strings to title caps in a string array


// Anonymous function 

var array=["apple","orange","mango","pineapple"]
var raj=function(array){
    let results=[]
    for(let j=0;j<array.length;j++){
        let result=array[j][0].toUpperCase()+array[j].slice(1)
        results.push(result)
    }
    console.log(results)       
}
raj(array);


// IIFE function

(function(){
    var arr=["apple","orange","mango","pineapple"]
    var results=[]
    for(var j=0;j<arr.length;j++){
        var result=arr[j][0].toUpperCase()+arr[j].slice(1)
        results.push(result)
    }
    console.log(results)       

})();
