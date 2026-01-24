function printMaximumSumSubArray(arr){
    let start=0;
    let end=0;
    let tempStart=0
    let currentSum=arr[0]
    let maxSum=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i]+currentSum){
            currentSum=arr[i]
            tempStart=i
        }
        else{
            currentSum=currentSum+arr[i]
        }
        if(currentSum>maxSum){
            maxSum=currentSum;
            start=tempStart;
            end=i
        }
    }
    return arr.slice(start,end+1)

}
let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(printMaximumSumSubArray(arr))
//Time Complexity O(n)
//Space Complexity O(1)