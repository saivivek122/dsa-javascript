
function secondSmallestInArray(arr){
    if(arr.length<2){
        return -1
    }
    let firstSmallest=Infinity;
    let secondSmallest=Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<firstSmallest){
            secondSmallest=firstSmallest;
            firstSmallest=arr[i]
        }
        else if(arr[i]<secondSmallest && arr[i]!=firstSmallest){
            secondSmallest=arr[i]
        }
    }
    return secondSmallest===Infinity ?-1:secondSmallest
}
let arr=[4, 2, 1, 3]
console.log(secondSmallestInArray(arr))
//Time Complexity O(n)
//Space Complexity O(1)