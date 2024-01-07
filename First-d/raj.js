// Return all the prime numbers in an array

// Anonymous function 

var arr=[2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var prime=function(arr){
   var result=[]
   for(var j=2;j<=arr.length;j++){
      var pm=true;
      for(var i=2;i<=j;i++){
         
         if(j%i==0 && j!=i){
            pm=false;
         }
      }
      if(pm==true){
         result.push(j);
      }
   }
   console.log(`prime numbers:${result}`);
}
prime(arr);

// IIFE function

(function(){
   var arr1=[2,3,4,5,6,7,8,9,10,11,12,13,14,15]
   var result1=[]
   for(var limit1=2;limit1<=arr1.length;limit1++){
      var pn=true;
      for(var j=2;j<=limit1;j++){
         if(limit1%j==0 && limit1!=j){
            pn=false;
         }
      }
      if(pn==true){
         result1.push(limit1)
      }
   }
   console.log(`prime numbers:${result1}`);
})();






