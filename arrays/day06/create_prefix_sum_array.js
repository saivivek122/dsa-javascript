function prefixSumArray(arr){
    let ans=[]
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
        ans.push(sum)
    }
    return ans
}
let arr=[1, 2, 3, 4]
console.log(prefixSumArray(arr))
//Time Complexity O(n)
//Space Complexity O(n)