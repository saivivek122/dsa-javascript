function threeSum(arr){
    arr.sort((a,b)=>a-b)
    let ans=[]
    for(let i=0;i<arr.length;i++){
        if(i>0 && arr[i]===arr[i-1])continue
        let left=i+1;
        let right=arr.length-1;
        while(left<right){
            let sum=arr[i]+arr[left]+arr[right]
            console.log(sum)
            if(sum===0){
                ans.push([arr[i],arr[left],arr[right]])
                left++;
                right--
                while(left<right && arr[left]===arr[left+1])left++;
                while(left<right && arr[right]===arr[right-1])right--
            }
            else if(sum<0){
                left++
            }
            else{
                right--
            }
        }
    }
    return ans
}
let arr=[-1, 0, 1, 2, -1, -4]
console.log(threeSum(arr))
//Time Complexity O(n*n)
//Space Complexity O(n)