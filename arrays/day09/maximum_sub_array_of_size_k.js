function maximumSubArrayOfSizeK(arr,k){
    if(arr.length<k){
        return "Invalid"
    }
    let windowSum=0;
    for(let i=0;i<k;i++){
        windowSum=windowSum+arr[i]
    }
    let maxSum=windowSum;
    let startIndex=0;
    for(let i=k;i<arr.length;i++){
        windowSum=windowSum+arr[i]
        windowSum=windowSum-arr[i-k]
        if(windowSum>maxSum){
            maxSum=windowSum
            startIndex=i-k+1
        }    
    }
    return arr.slice(startIndex,startIndex+k)
}
let arr= [2, 1, 5, 1, 3, 2]
let k = 3
console.log(maximumSubArrayOfSizeK(arr,k))
//Time Complexity O(n)
//Space Complexity O(1)