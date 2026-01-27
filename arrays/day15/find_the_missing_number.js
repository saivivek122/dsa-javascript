function findMissingNumber(arr){
    let totalSum=(arr.length*(arr.length+1)/2)
    let actualSum=0;
    for(let i=0;i<arr.length;i++){
        actualSum=actualSum+arr[i]
    }
    return totalSum-actualSum
}
let arr=[3, 0, 1]
console.log(findMissingNumber(arr))
//Time Complexity O(n)
//Space Complexity O(1)