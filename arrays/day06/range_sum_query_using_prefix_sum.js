function prefixSum(arr){
    let prefix=[]
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
        prefix.push(sum)
    }
    return prefix
}
function rangeSum(prefix,l,r){
    if(l===0){
        return prefix[r]
    }
    return prefix[r]-prefix[l-1]
}
let arr=[1, 2, 3, 4, 5]
let prefix=prefixSum(arr)
let l=1
let r=3
console.log(rangeSum(prefix,l,r))
//For prefixSum
//Time Complexity O(n)
//Space Complexity O(n)
//For range query
//Time Complexity O(1)
//Space Complexity O(1)
//Overall
//Preprocessing 
//Time Complexity O(n)
//Space Complexity O(n)
//Each Query 
//Time Complexity O(1)
//Space Complexity O(1)
