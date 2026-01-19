function subArrayWithSumKOptimized(arr,k){
    let sum=0;
    let map=new Map()
    map.set(0,-1)
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
        if(map.has(sum-k)){
            return "YES"
        }
        if(!map.has(sum)){
            map.set(sum,i)
        }
    }
    return "NO"
   
}
let arr=[1, 2, 3, 4, 5]
let k = 9
console.log(subArrayWithSumKOptimized(arr,k))
//Time Complexity O(n)
//Space Complexity O(n)
