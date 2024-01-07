//Return all the prime numbers in an array

//Arrow function
var arr=[2,3,4,5,6,7,9,11,13,14,15];
var prime=[];
const prime_no=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let pm=true;
        for(let j=0;j<=i;j++){
            if(arr[i]%arr[j]==0 && arr[i]!=arr[j]){
                pm=false;
            }
        }
        if(pm===true){
            prime.push(arr[i]);
        }
    }
    console.log(`prine number:${prime}`);
}
prime_no(arr);