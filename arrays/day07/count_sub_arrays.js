function countSubArrays(arr){
    let n=arr.length
    return n*(n+1)/2
}
let arr=[1, 2, 3]
console.log(countSubArrays(arr))
//Time Complexity O(1)
//Space Complexity O(1)