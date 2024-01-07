// A=> Print odd numbers in an array


//  Anonymous Function

const arr=[1,2,3,4,5,66,77,8,9,10]
var resultss=[]
var raj=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            var result=(arr[i])
            resultss.push(result)
        }
    }
    console.log(resultss)
}
raj(arr);


// // IIFE Function

(function(){
    const array=[1,2,3,4,5,66,77,8,9,10]
    for(let i=0;i<array.length;i++){
        if(array[i]%2!==0){
            console.log(array[i]);
        }
    }
})();






