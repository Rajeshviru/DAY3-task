//Rotate an array by k times

// Anonymous function
var arr=[1,2,3,4,5];        //3-times rotated
var rotate=function(arr){
    var times=3;
    for(var i=0;i<times;i++){
        arr.push(arr[0]);   
        arr.shift();     
    }
     console.log(arr)
}
rotate(arr);


// IIFE function


(function(){
    var arr=[1,2,3,4,5];
    var times=3;
    for(var i=0;i<times;i++){
        arr.push(arr[0]);
        arr.shift();
    }
    console.log(arr)
})();







